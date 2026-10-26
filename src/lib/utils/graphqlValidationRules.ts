import type { ApolloServerPlugin } from '@apollo/server';
import {
	GraphQLError,
	getNamedType,
	isCompositeType,
	isInterfaceType,
	isListType,
	isNonNullType,
	isObjectType,
	getVariableValues,
	validate,
	type ASTVisitor,
	type FieldNode,
	type FragmentDefinitionNode,
	type GraphQLCompositeType,
	type GraphQLField,
	type OperationDefinitionNode,
	type SelectionSetNode,
	type ValidationContext
} from 'graphql';

const MAX_QUERY_DEPTH = 12;
const MAX_QUERY_ALIASES = 10;
const MAX_QUERY_FIELDS = 50_000;
const MAX_QUERY_COMPLEXITY = 1_800_000;
const MAX_LIST_SIZE = 1_469;

interface QueryMetrics {
	aliases: number;
	fields: number;
	complexity: number;
	halted: boolean;
}

function getFieldDefinition(parentType: GraphQLCompositeType, fieldName: string): GraphQLField<unknown, unknown> | undefined {
	if (isObjectType(parentType) || isInterfaceType(parentType)) {
		return parentType.getFields()[fieldName];
	}

	return undefined;
}

function getListSize(
	node: FieldNode,
	fieldDefinition: GraphQLField<unknown, unknown>,
	operation: OperationDefinitionNode,
	variableValues?: Record<string, unknown>
): number {
	const isListField = isListType(fieldDefinition.type) || (isNonNullType(fieldDefinition.type) && isListType(fieldDefinition.type.ofType));
	if (!isListField) {
		return 1;
	}

	const takeArgument = fieldDefinition.args.find((argument) => argument.name === 'take');
	if (takeArgument === undefined) {
		return 1;
	}

	const takeNode = node.arguments?.find((argument) => argument.name.value === 'take')?.value;
	let take: number;

	if (takeNode?.kind === 'IntValue') {
		take = Number(takeNode.value);
	} else if (takeNode?.kind === 'Variable') {
		const variableValue = variableValues?.[takeNode.name.value];
		if (typeof variableValue === 'number') {
			take = variableValue;
		} else {
			const variableDefault = operation.variableDefinitions?.find(
				(definition) => definition.variable.name.value === takeNode.name.value
			)?.defaultValue;
			take = variableDefault?.kind === 'IntValue' ? Number(variableDefault.value) : MAX_LIST_SIZE;
		}
	} else if (typeof takeArgument.defaultValue === 'number') {
		take = takeArgument.defaultValue;
	} else {
		take = MAX_LIST_SIZE;
	}

	return Math.min(Math.max(take, 1), MAX_LIST_SIZE);
}

function reportLimitExceeded(context: ValidationContext, metrics: QueryMetrics, message: string): void {
	context.reportError(new GraphQLError(message));
	metrics.halted = true;
}

function validateOperation(
	context: ValidationContext,
	operation: OperationDefinitionNode,
	fragments: Map<string, FragmentDefinitionNode>,
	variableValues: Record<string, unknown> | undefined
): void {
	const schema = context.getSchema();
	let rootType = schema.getQueryType();
	if (operation.operation === 'mutation') {
		rootType = schema.getMutationType();
	} else if (operation.operation === 'subscription') {
		rootType = schema.getSubscriptionType();
	}

	if (rootType === null || rootType === undefined) {
		return;
	}

	const metrics: QueryMetrics = { aliases: 0, fields: 0, complexity: 0, halted: false };

	function visitSelectionSet(
		selectionSet: SelectionSetNode,
		parentType: GraphQLCompositeType,
		depth: number,
		multiplier: number,
		activeFragments: Set<string>
	): void {
		for (const selection of selectionSet.selections) {
			if (metrics.halted) {
				return;
			}

			if (selection.kind === 'Field') {
				metrics.fields += 1;
				if (selection.alias !== undefined) {
					metrics.aliases += 1;
					if (metrics.aliases > MAX_QUERY_ALIASES) {
						reportLimitExceeded(context, metrics, `Operation exceeds the maximum of ${MAX_QUERY_ALIASES} aliased fields.`);
						return;
					}
				}

				if (metrics.fields > MAX_QUERY_FIELDS) {
					reportLimitExceeded(context, metrics, `Operation exceeds the maximum of ${MAX_QUERY_FIELDS} selected fields.`);
					return;
				}

				const fieldDepth = depth + 1;
				if (fieldDepth > MAX_QUERY_DEPTH) {
					reportLimitExceeded(context, metrics, `Operation exceeds the maximum query depth of ${MAX_QUERY_DEPTH}.`);
					return;
				}

				metrics.complexity += multiplier;
				if (variableValues !== undefined && metrics.complexity > MAX_QUERY_COMPLEXITY) {
					reportLimitExceeded(
						context,
						metrics,
						`Operation exceeds the maximum query complexity of ${MAX_QUERY_COMPLEXITY} (calculated complexity: ${metrics.complexity}).`
					);
					return;
				}

				const fieldDefinition = getFieldDefinition(parentType, selection.name.value);
				if (fieldDefinition === undefined || selection.selectionSet === undefined) {
					continue;
				}

				const listMultiplier = getListSize(selection, fieldDefinition, operation, variableValues);
				const namedChildType = getNamedType(fieldDefinition.type);
				if (isCompositeType(namedChildType)) {
					visitSelectionSet(selection.selectionSet, namedChildType, fieldDepth, multiplier * listMultiplier, activeFragments);
				}

				continue;
			}

			if (selection.kind === 'InlineFragment') {
				const typeCondition = selection.typeCondition === undefined ? undefined : schema.getType(selection.typeCondition.name.value);
				const fragmentType = typeCondition !== undefined && isCompositeType(typeCondition) ? typeCondition : parentType;
				visitSelectionSet(selection.selectionSet, fragmentType, depth, multiplier, activeFragments);
				continue;
			}

			const fragment = fragments.get(selection.name.value);
			if (fragment === undefined || activeFragments.has(fragment.name.value)) {
				continue;
			}

			const fragmentType = schema.getType(fragment.typeCondition.name.value);
			if (!isCompositeType(fragmentType)) {
				continue;
			}

			activeFragments.add(fragment.name.value);
			visitSelectionSet(fragment.selectionSet, fragmentType, depth, multiplier, activeFragments);
			activeFragments.delete(fragment.name.value);
		}
	}

	visitSelectionSet(operation.selectionSet, rootType, 0, 1, new Set());
}

export function createQueryResourceLimitRule(
	variableValues?: Record<string, unknown>,
	selectedOperation?: OperationDefinitionNode
): (context: ValidationContext) => ASTVisitor {
	return (context) => ({
		Document: {
			leave(document) {
				const fragments = new Map<string, FragmentDefinitionNode>();
				for (const definition of document.definitions) {
					if (definition.kind === 'FragmentDefinition') {
						fragments.set(definition.name.value, definition);
					}
				}

				for (const definition of document.definitions) {
					if (definition.kind === 'OperationDefinition' && (selectedOperation === undefined || definition === selectedOperation)) {
						validateOperation(context, definition, fragments, variableValues);
					}
				}
			}
		}
	});
}

export const queryResourceLimitRule = createQueryResourceLimitRule();

export const queryComplexityLimitPlugin: ApolloServerPlugin = {
	async requestDidStart() {
		return {
			async didResolveOperation(requestContext) {
				const { document, operation, request, schema } = requestContext;
				if (operation === undefined) {
					return;
				}

				const variableResult = getVariableValues(schema, operation.variableDefinitions ?? [], request.variables ?? {});
				if ('errors' in variableResult) {
					return;
				}

				const complexityErrors = validate(schema, document, [createQueryResourceLimitRule(variableResult.coerced, operation)]);

				if (complexityErrors.length > 0) {
					throw new GraphQLError(complexityErrors[0].message, {
						nodes: complexityErrors[0].nodes,
						extensions: {
							code: 'GRAPHQL_VALIDATION_FAILED',
							http: { status: 400 }
						}
					});
				}
			}
		};
	}
};

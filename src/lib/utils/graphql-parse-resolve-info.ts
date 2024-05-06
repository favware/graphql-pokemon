import { isNullish } from '@sapphire/utilities';
import {
  GraphQLUnionType,
  getArgumentValues,
  getNamedType,
  isCompositeType,
  type ASTNode,
  type FieldNode,
  type FragmentSpreadNode,
  type GraphQLCompositeType,
  type GraphQLField,
  type GraphQLInterfaceType,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLResolveInfo,
  type InlineFragmentNode,
  type NamedTypeNode,
  type SelectionNode
} from 'graphql';

/**
 * Parses the provided GraphQLResolveInfo object.
 * @param resolveInfo - The GraphQLResolveInfo object to parse.
 * @param options - The options to use when parsing the resolve info.
 * @returns The parsed resolve info.
 *
 * @license MIT
 * @copyright 2018 Benjie Gillam - Retrieved on `2024-04-05` from {@linkplain https://github.com/graphile/graphile-engine/blob/v4.14.0/packages/graphql-parse-resolve-info/src/index.ts}
 */
export function parseResolveInfo(resolveInfo: GraphQLResolveInfo, options: ParseOptions = {}): ResolveTree | FieldsByTypeName | null | undefined {
  const fieldNodes: ReadonlyArray<FieldNode> =
    // @ts-expect-error Property 'fieldASTs' does not exist on type 'GraphQLResolveInfo'.
    resolveInfo.fieldNodes || resolveInfo.fieldASTs;

  const { parentType } = resolveInfo;

  if (!fieldNodes) {
    throw new Error('No fieldNodes provided!');
  }

  if (options.keepRoot === null) {
    options.keepRoot = false;
  }

  if (options.deep === null) {
    options.deep = true;
  }

  const tree = fieldTreeFromAST(fieldNodes, resolveInfo, parentType, undefined, options);
  if (!options.keepRoot) {
    const typeKey = firstKey(tree);
    if (!typeKey) {
      return null;
    }

    const fields = tree[typeKey];
    const fieldKey = firstKey(fields);
    if (!fieldKey) {
      return null;
    }

    return fields[fieldKey];
  }
  return tree;
}

function getFieldFromAST<TContext>(ast: ASTNode, parentType: GraphQLCompositeType): GraphQLField<GraphQLCompositeType, TContext> | undefined {
  if (ast.kind === 'Field') {
    const fieldNode: FieldNode = ast;
    const fieldName = fieldNode.name.value;
    if (!(parentType instanceof GraphQLUnionType)) {
      const type: GraphQLObjectType | GraphQLInterfaceType = parentType;
      return type.getFields()[fieldName];
    }
  }

  return undefined;
}

function fieldTreeFromAST<T extends SelectionNode>(
  inASTs: ReadonlyArray<T> | T,
  resolveInfo: GraphQLResolveInfo,
  parentType: GraphQLCompositeType,
  initTree: FieldsByTypeName = {},
  options: ParseOptions = {}
): FieldsByTypeName {
  const { variableValues } = resolveInfo;
  const fragments = resolveInfo.fragments || {};
  const asts: ReadonlyArray<T> = Array.isArray(inASTs) ? inASTs : [inASTs];
  if (!initTree[parentType.name]) {
    initTree[parentType.name] = {};
  }
  return asts.reduce((tree, selectionVal: SelectionNode) => {
    if (selectionVal.kind === 'Field') {
      const val: FieldNode = selectionVal;
      const name = val.name.value;
      const isReserved = name.startsWith('_') && name[1] === '_' && name !== '__id';
      if (!isReserved) {
        const alias: string = val.alias?.value ? val.alias.value : name;
        const field = getFieldFromAST(val, parentType);
        if (!field) {
          return tree;
        }

        const fieldGqlTypeOrUndefined = getNamedType(field.type);
        if (!fieldGqlTypeOrUndefined) {
          return tree;
        }

        const fieldGqlType: GraphQLNamedType = fieldGqlTypeOrUndefined;
        // @ts-expect-error field is typed stricter than GraphQL expects it, silly GraphQL
        const args = getArgumentValues(field, val, variableValues) || {};

        if (parentType.name && !tree[parentType.name][alias]) {
          const newTreeRoot: ResolveTree = {
            name,
            alias,
            args,
            fieldsByTypeName: isCompositeType(fieldGqlType)
              ? {
                  [fieldGqlType.name]: {}
                }
              : {}
          };
          tree[parentType.name][alias] = newTreeRoot;
        }

        const { selectionSet } = val;

        if (!isNullish(selectionSet) && options.deep && isCompositeType(fieldGqlType)) {
          const newParentType: GraphQLCompositeType = fieldGqlType;
          fieldTreeFromAST(selectionSet.selections, resolveInfo, newParentType, tree[parentType.name][alias].fieldsByTypeName, options);
        }
      }
    } else if (selectionVal.kind === 'FragmentSpread' && options.deep) {
      const val: FragmentSpreadNode = selectionVal;
      const name = val.name?.value;
      const fragment = fragments[name];
      let fragmentType: GraphQLNamedType | null | undefined = parentType;

      if (fragment.typeCondition) {
        fragmentType = getType(resolveInfo, fragment.typeCondition);
      }

      if (fragmentType && isCompositeType(fragmentType)) {
        const newParentType: GraphQLCompositeType = fragmentType;
        fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, newParentType, tree, options);
      }
    } else if (selectionVal.kind === 'InlineFragment' && options.deep) {
      const val: InlineFragmentNode = selectionVal;
      const fragment = val;
      let fragmentType: GraphQLNamedType | null | undefined = parentType;

      if (fragment.typeCondition) {
        fragmentType = getType(resolveInfo, fragment.typeCondition);
      }

      if (fragmentType && isCompositeType(fragmentType)) {
        const newParentType: GraphQLCompositeType = fragmentType;
        fieldTreeFromAST(fragment.selectionSet.selections, resolveInfo, newParentType, tree, options);
      }
    }

    // Ref: https://github.com/graphile/postgraphile/pull/342/files#diff-d6702ec9fed755c88b9d70b430fda4d8R148
    return tree;
  }, initTree);
}

function firstKey(obj: Record<string, unknown>) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      return key;
    }
  }

  return undefined;
}

function getType(resolveInfo: GraphQLResolveInfo, typeCondition: NamedTypeNode) {
  const { schema } = resolveInfo;
  const { kind, name } = typeCondition;
  if (kind === 'NamedType') {
    const typeName = name.value;
    return schema.getType(typeName);
  }

  return undefined;
}

export interface FieldsByTypeName {
  [str: string]: {
    [str: string]: ResolveTree;
  };
}

export interface ResolveTree {
  name: string;
  alias: string;
  args: {
    [str: string]: unknown;
  };
  fieldsByTypeName: FieldsByTypeName;
}

interface ParseOptions {
  keepRoot?: boolean;
  deep?: boolean;
}

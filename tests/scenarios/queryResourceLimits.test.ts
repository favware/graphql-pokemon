import { buildASTSchema, getOperationAST, getVariableValues, parse, validate } from 'graphql';
import { executeGraphQL } from '#test-utils/testUtils';
import { createQueryResourceLimitRule } from '#utils/graphqlValidationRules';
import { RootTypedef } from '#utils/grapqhl-root-typedef-resolver';

describe('GraphQL query resource limits', () => {
	test('rejects operations with too many aliased fields', async () => {
		const fields = Array.from({ length: 11 }, (_, index) => `pokemon${index}: getPokemon(pokemon: bulbasaur) { species }`).join('\n');
		const { errors } = await executeGraphQL({ query: `query { ${fields} }` });

		expect(errors?.[0]?.message).toContain('maximum of 10 aliased fields');
		expect(errors?.[0]?.extensions).not.toHaveProperty('stacktrace');
	});

	test('rejects operations that exceed the maximum selection depth', async () => {
		const nestedEvolutions = `${'evolutions { '.repeat(12)}species${' }'.repeat(12)}`;
		const { errors } = await executeGraphQL({ query: `query { getPokemon(pokemon: bulbasaur) { ${nestedEvolutions} } }` });

		expect(errors?.[0]?.message).toContain('maximum query depth of 12');
	});

	test('calculates paginated list complexity from runtime variable values', () => {
		const schema = buildASTSchema(RootTypedef);
		const fields = 'species '.repeat(35_399);
		const document = parse(`query ($take: Int!) { getAllPokemon(take: $take) { ${fields} } }`);
		const operation = getOperationAST(document);
		if (operation === null || operation === undefined) {
			throw new Error('Expected a query operation');
		}

		const validateTake = (take: number) => {
			const variableValues = getVariableValues(schema, operation.variableDefinitions ?? [], { take });
			if (!('coerced' in variableValues)) {
				const error = variableValues.errors?.[0];
				if (error === undefined) {
					throw new Error('Expected valid query variables');
				}

				throw error;
			}

			return validate(schema, document, [createQueryResourceLimitRule(variableValues.coerced, operation)]);
		};

		expect(validateTake(50)).toHaveLength(0);
		expect(validateTake(1_000)[0]?.message).toContain('maximum query complexity of 1800000');
	});

	test('allows a small page with a normal selection', async () => {
		const { errors, data } = await executeGraphQL<'getAllPokemon'>({
			query: 'query { getAllPokemon(take: 5) { key species } }'
		});

		expect(errors).toBeUndefined();
		expect(data.getAllPokemon).toHaveLength(5);
	});
});

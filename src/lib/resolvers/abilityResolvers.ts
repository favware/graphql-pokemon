import { abilities } from '#assets/abilities';
import { mapAbilityDataToAbilityGraphQL } from '#mappers/abilityMapper';
import type { Ability } from '#types/graphql-mapped-types';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput } from '#utils/utils';
import { validateGetFuzzyAbilityArgs, type GetFuzzyAbilityArgs } from '#validations/fuzzyArgs/fuzzyAbilityArgs';
import { validateGetAbilityArgs, type GetAbilityArgs } from '#validations/getAbilityArgs';

const fuzzySearch = new FuzzySearch(abilities, ['name', 'aliases']);

/**
 * Gets the details on a Pokémon ability, using the ability name
 */
export function getAbility(args: GetAbilityArgs, requestedFields: GraphQLSet<keyof Ability>): Ability {
	const validatedArgs = validateGetAbilityArgs(args);

	const abilityFromDataset = abilities.get(validatedArgs.ability);

	if (!abilityFromDataset) {
		throw new Error(`No ability found for ${validatedArgs.ability}`);
	}

	const graphqlObject = mapAbilityDataToAbilityGraphQL({ data: abilityFromDataset, requestedFields });

	if (!graphqlObject) {
		throw new Error(`Failed to get data for ability: ${validatedArgs.ability}`);
	}

	return graphqlObject;
}

/**
 * Gets details on a Pokémon ability, using a fuzzy search on name
 *
 * This can be used to find multiple results based on the query
 *
 * By default only 1 result is returned. You can provide the arguments `take`, `offset`, and `reverse` to modify this behaviour.
 */
export function getFuzzyAbility(args: GetFuzzyAbilityArgs, requestedFields: GraphQLSet<keyof Ability>): Ability[] {
	const validatedDargs = validateGetFuzzyAbilityArgs(args);

	let { ability } = validatedDargs;
	const { offset, reverse, take } = validatedDargs;

	ability = preParseInput(ability);

	const fuzzyResult = fuzzySearch.runFuzzy(ability);

	if (reverse) {
		fuzzyResult.reverse();
	}

	const fuzzyEntries = fuzzyResult.slice(offset!, offset! + take!);

	if (!fuzzyEntries.length) {
		throw new Error(`No abilities found for: ${validatedDargs.ability}`);
	}

	const graphqlObjects = fuzzyEntries.map((abilityData) => mapAbilityDataToAbilityGraphQL({ data: abilityData, requestedFields }));

	if (!graphqlObjects.length) {
		throw new Error(`Failed to get data for ability: ${validatedDargs.ability}`);
	}

	return graphqlObjects;
}

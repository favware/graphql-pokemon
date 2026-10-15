import { lazy } from '@sapphire/utilities';
import { moves } from '#assets/moves';
import { pokedex } from '#assets/pokedex';
import { mapPokemonAndMovesToLearnsetGraphQL } from '#mappers/learnsetMapper';
import { fuzzySearch as moveFuzzySearch } from '#resolvers/moveResolvers';
import { fuzzySearch as pokemonFuzzySearch } from '#resolvers/pokemonResolvers';
import type { Learnset } from '#types/graphql-mapped-types';
import type { NonNullish } from '#types/utility-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { toLowerSingleWordCase } from '#utils/utils';
import { validateGetLearnsetArgs, type GetLearnsetArgs } from '#validations/getLearnsetArgs';

const formatter = lazy(() => new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }));

/**
 * Gets the learnsets for a given Pokémon and move.
 *
 * Multiple moves are possible by putting them in an array: `[move1, move2]`.
 *
 * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
 */
export function getLearnset(args: NonNullish<GetLearnsetArgs>, requestedFields: GraphQLSet<keyof Learnset>): Learnset {
	const validatedArgs = validateGetLearnsetArgs(args);

	const graphqlObject = mapPokemonAndMovesToLearnsetGraphQL({ args: validatedArgs, requestedFields });

	if (!graphqlObject) {
		const movesString = validatedArgs.moves.length > 1 ? 'moves' : 'move';
		const movesList = formatter().format(validatedArgs.moves);
		const generationString = validatedArgs.generation ? ` with generation filter set to ${validatedArgs.generation}` : '';

		throw new Error(
			`Failed to get learnsets for the combination of Pokémon "${validatedArgs.pokemon}", and ${movesString} "${movesList}"${generationString}`
		);
	}

	return graphqlObject;
}

/**
 * Gets the learnset for a given Pokémon and move.
 *
 * A fuzzy search is performed to find a matching Pokémon and move
 *
 * Multiple moves are possible by putting them in an array: `[move1, move2]`.
 *
 * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
 */
export function getFuzzyLearnset(args: NonNullish<GetLearnsetArgs>, requestedFields: GraphQLSet<keyof Learnset>): Learnset {
	const validatedArgs = validateGetLearnsetArgs(args);

	// Try and get an exactly matching Pokémon
	const pokemonData = pokedex.get(validatedArgs.pokemon);

	// If it not an exact move then perform a fuzzy search
	if (!pokemonData) {
		const fuzzyEntry = pokemonFuzzySearch.runFuzzy(validatedArgs.pokemon);
		if (fuzzyEntry === undefined || !fuzzyEntry.length) {
			throw new Error(`Failed to get data for Pokémon: ${validatedArgs.pokemon}`);
		}
		validatedArgs.pokemon = toLowerSingleWordCase(fuzzyEntry[0].species);
	}

	for (const [index, move] of validatedArgs.moves.entries()) {
		// Try and get an exactly matching move
		const moveFromDataset = moves.get(move);

		// If it not an exact move then perform a fuzzy search
		if (!moveFromDataset) {
			const fuzzyEntry = moveFuzzySearch.runFuzzy(move);

			if (fuzzyEntry === undefined || !fuzzyEntry.length) {
				throw new Error(`Failed to get data for move: ${move}`);
			}

			// And overwrite the move at  this index with the proper entry
			validatedArgs.moves[index] = toLowerSingleWordCase(fuzzyEntry[0].name);
		}
	}

	return getLearnset(validatedArgs, requestedFields);
}

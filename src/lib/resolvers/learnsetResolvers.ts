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
import { lazy } from '@sapphire/utilities';

const formatter = lazy(() => new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }));

/**
 * Gets the learnsets for a given Pokémon and move.
 *
 * Multiple moves are possible by putting them in an array: `[move1, move2]`.
 *
 * You can also apply a generation filter (only results for the given generation will be returned) with the generation argument
 */
export function getLearnset(args: NonNullish<GetLearnsetArgs>, requestedFields: GraphQLSet<keyof Learnset>): Learnset {
  args = validateGetLearnsetArgs(args);

  const graphqlObject = mapPokemonAndMovesToLearnsetGraphQL({ args, requestedFields });

  if (!graphqlObject) {
    const movesString = args.moves.length > 1 ? 'moves' : 'move';
    const movesList = formatter().format(args.moves);
    const generationString = args.generation ? ` with generation filter set to ${args.generation}` : '';

    throw new Error(`Failed to get learnsets for the combination of Pokémon "${args.pokemon}", and ${movesString} "${movesList}"${generationString}`);
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
  args = validateGetLearnsetArgs(args);

  // Try and get an exactly matching Pokémon
  const pokemonData = pokedex.get(args.pokemon);

  // If it not an exact move then perform a fuzzy search
  if (!pokemonData) {
    const fuzzyEntry = pokemonFuzzySearch.runFuzzy(args.pokemon);
    if (fuzzyEntry === undefined || !fuzzyEntry.length) {
      throw new Error(`Failed to get data for Pokémon: ${args.pokemon}`);
    }
    args.pokemon = toLowerSingleWordCase(fuzzyEntry[0].species);
  }

  for (const [index, move] of args.moves.entries()) {
    // Try and get an exactly matching move
    const moveFromDataset = moves.get(move);

    // If it not an exact move then perform a fuzzy search
    if (!moveFromDataset) {
      const fuzzyEntry = moveFuzzySearch.runFuzzy(move);

      if (fuzzyEntry === undefined || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for move: ${move}`);
      }

      // And overwrite the move at  this index with the proper entry
      args.moves[index] = toLowerSingleWordCase(fuzzyEntry[0].name);
    }
  }

  return getLearnset(args, requestedFields);
}

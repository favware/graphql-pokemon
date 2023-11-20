import { moves } from '#assets/moves';
import { mapMoveDataToMoveGraphQL } from '#mappers/moveMapper';
import type { Move } from '#types/graphql-mapped-types';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput } from '#utils/utils';
import { validateGetFuzzyMoveArgs, type GetFuzzyMoveArgs } from '#validations/fuzzyArgs/fuzzyMoveArgs';
import { validateGetMoveArgs, type GetMoveArgs } from '#validations/getMoveArgs';

export const fuzzySearch = new FuzzySearch(moves, ['name', 'aliases']);

/**
 * Gets the details on a Pokémon move, using the move name
 */
export function getMove(args: GetMoveArgs, requestedFields: GraphQLSet<keyof Move>): Move {
  args = validateGetMoveArgs(args);

  const moveFromDataset = moves.get(args.move);

  if (!moveFromDataset) {
    throw new Error(`No move found for ${args.move}`);
  }

  const graphqlObject = mapMoveDataToMoveGraphQL({ data: moveFromDataset, requestedFields });

  if (!graphqlObject) {
    throw new Error(`Failed to get data for move: ${args.move}`);
  }

  return graphqlObject;
}

/**
 * Gets details on a Pokémon move, using a fuzzy search on name
 *
 * This can be used to find multiple results based on the query
 *
 * By default only 1 result is returned. You can provide the arguments `take`, `offset`, and `reverse` to modify this behaviour.
 */
export function getFuzzyMove(args: GetFuzzyMoveArgs, requestedFields: GraphQLSet<keyof Move>): Move[] {
  args = validateGetFuzzyMoveArgs(args);

  let { move } = args;
  const { offset, reverse, take } = args;

  move = preParseInput(move);

  const fuzzyResult = fuzzySearch.runFuzzy(move);

  if (reverse) {
    fuzzyResult.reverse();
  }

  const fuzzyEntries = fuzzyResult.slice(offset!, offset! + take!);

  if (!fuzzyEntries.length) {
    throw new Error(`No moves found for: ${args.move}`);
  }

  const graphqlObjects = fuzzyEntries.map((moveData) => mapMoveDataToMoveGraphQL({ data: moveData, requestedFields }));

  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for move: ${args.move}`);
  }

  return graphqlObjects;
}

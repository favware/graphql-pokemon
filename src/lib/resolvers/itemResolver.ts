import { items } from '#assets/items';
import { mapItemDataToItemGraphQL } from '#mappers/itemMapper';
import type { Item } from '#types/graphql-mapped-types';
import { FuzzySearch } from '#utils/FuzzySearch';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput } from '#utils/utils';
import { validateGetFuzzyItemArgs, type GetFuzzyItemArgs } from '#validations/fuzzyArgs/fuzzyItemArgs';
import { validateGetItemArgs, type GetItemArgs } from '#validations/getItemArgs';

const fuzzySearch = new FuzzySearch(items, ['name', 'aliases']);

/**
 * Gets the details on a Pokémon item, using the item name
 */
export function getItem(args: GetItemArgs, requestedFields: GraphQLSet<keyof Item>): Item {
  args = validateGetItemArgs(args);

  const itemFromDataset = items.get(args.item);

  if (!itemFromDataset) {
    throw new Error(`No item found for ${args.item}`);
  }

  const graphqlObject = mapItemDataToItemGraphQL({ data: itemFromDataset, requestedFields });

  if (!graphqlObject) {
    throw new Error(`Failed to get data for item: ${args.item}`);
  }

  return graphqlObject;
}

/**
 * Gets details on a Pokémon item, using a fuzzy search on name
 *
 * This can be used to find multiple results based on the query
 *
 * By default only 1 result is returned. You can provide the arguments `take`, `offset`, and `reverse` to modify this behaviour.
 */
export function getFuzzyItem(args: GetFuzzyItemArgs, requestedFields: GraphQLSet<keyof Item>): Item[] {
  args = validateGetFuzzyItemArgs(args);

  let { item } = args;
  const { offset, reverse, take } = args;

  item = preParseInput(item);

  const fuzzyResult = fuzzySearch.runFuzzy(item);

  if (reverse) {
    fuzzyResult.reverse();
  }

  const fuzzyEntries = fuzzyResult.slice(offset!, offset! + take!);

  if (!fuzzyEntries.length) {
    throw new Error(`No items found for: ${args.item}`);
  }

  const graphqlObjects = fuzzyEntries.map((itemData) => mapItemDataToItemGraphQL({ data: itemData, requestedFields }));

  if (!graphqlObjects.length) {
    throw new Error(`Failed to get data for item: ${args.item}`);
  }

  return graphqlObjects;
}

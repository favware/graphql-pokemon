import ItemPaginatedArgs, { items } from '#arguments/ItemPaginatedArgs';
import { itemAliases } from '#assets/aliases';
import ItemService from '#services/ItemSerivce';
import ItemEntry from '#structures/ItemEntry';
import { getRequestedFields } from '#utils/getRequestedFields';
import GraphQLSet from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';

@Resolver(ItemEntry)
export default class ItemResolver {
  private itemService: ItemService;

  public constructor() {
    this.itemService = new ItemService();
  }

  @Query(() => ItemEntry, {
    description: [
      'Gets details on a single item based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on top',
      'Reversal is applied before paginations!'
    ].join('')
  })
  public getItemDetailsByFuzzy(
    @Args() { item, skip, take, reverse }: ItemPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof ItemEntry>
  ): ItemEntry {
    const preParsedItem = Util.preParseInput(item);
    let entry = this.itemService.findByName(itemAliases.get(preParsedItem) ?? preParsedItem);

    // If there is no entry from a direct match then try a fuzzy match
    if (!entry) {
      const fuzzyEntry = this.itemService.findByFuzzy({
        item,
        skip,
        take,
        reverse
      });

      if (fuzzyEntry === undefined || !fuzzyEntry.length) {
        throw new Error(`Failed to get data for item: ${item}`);
      }

      entry = this.itemService.findByName(Util.toLowerSingleWordCase(fuzzyEntry[0].item.name));

      // If there is still no entry then throw an error
      if (!entry) {
        throw new Error(`No Item found for ${item}`);
      }
    }

    const detailsEntry = this.itemService.findByNameWithDetails(entry, requestedFields);

    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return detailsEntry;
  }

  @Query(() => ItemEntry, {
    description: ['Gets details on a single item based on an exact name match.'].join('')
  })
  public getItemDetailsByName(@Arg('item', () => items) item: string, @getRequestedFields() requestedFields: GraphQLSet<keyof ItemEntry>): ItemEntry {
    const entry = this.itemService.findByName(item);

    if (!entry) {
      throw new Error(`No Item found for ${item}`);
    }

    const details = this.itemService.findByNameWithDetails(entry, requestedFields);

    if (details === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return details;
  }

  @Query(() => [GraphQLJSONObject], {
    description: [
      'Gets raw entries of multiple items based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  public getItemByFuzzy(@Args() { item, skip, take, reverse }: ItemPaginatedArgs): Fuse.FuseResult<Pokemon.Item>[] {
    const itemEntries = this.itemService.findByFuzzy({
      item,
      skip,
      take,
      reverse
    });

    if (itemEntries === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return itemEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the raw entry of a single item based on name.' })
  public getItemByName(@Arg('item', () => items) item: string): Pokemon.Item {
    const itemEntry = this.itemService.findByName(item);

    if (itemEntry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return itemEntry;
  }
}

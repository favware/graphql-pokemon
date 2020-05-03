import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args, Query, Resolver } from 'type-graphql';
import ItemPaginatedArgs, { Items } from '../arguments/ItemPaginatedArgs';
import ItemService from '../services/ItemSerivce';
import ItemEntry from '../structures/ItemEntry';
import { getRequestedFields } from '../utils/getRequestedFields';
import GraphQLSet from '../utils/GraphQLSet';
import Util from '../utils/util';

@Resolver(ItemEntry)
export default class ItemResolver {
  private itemService: ItemService;

  constructor() {
    this.itemService = new ItemService();
  }

  @Query(() => ItemEntry, {
    description: [
      'Gets details on a single item based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on top',
      'Reversal is applied before paginations!'
    ].join('')
  })
  getItemDetailsByFuzzy(
    @Args() { item, skip, take, reverse }: ItemPaginatedArgs,
    @getRequestedFields() requestedFields: GraphQLSet<keyof ItemEntry>
  ) {
    const entry = this.itemService.findByName(item);

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

      item = Util.toLowerSingleWordCase(fuzzyEntry[0].name);
    }

    const detailsEntry = this.itemService.findByNameWithDetails(item, requestedFields);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return detailsEntry;
  }

  @Query(() => ItemEntry, {
    description: ['Gets details on a single item based on an exact name match.'].join('')
  })
  getItemDetailsByName(
    @Arg('item', () => Items) item: string,
    @getRequestedFields() requestedFields: GraphQLSet<keyof ItemEntry>
  ) {
    const entry = this.itemService.findByNameWithDetails(item, requestedFields);

    if (entry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return entry;
  }

  @Query(() => [GraphQLJSONObject], {
    description: [
      'Gets raw entries of multiple items based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join('')
  })
  getItemByFuzzy(@Args() { item, skip, take, reverse }: ItemPaginatedArgs) {
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
  getItemByName(@Arg('item', () => Items) item: string) {
    const itemEntry = this.itemService.findByName(item);

    if (itemEntry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return itemEntry;
  }
}

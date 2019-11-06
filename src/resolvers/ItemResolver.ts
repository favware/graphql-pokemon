import { GraphQLJSONObject } from 'graphql-type-json';
import { Args, Query, Resolver, Arg } from 'type-graphql';
import PaginatedArgs from '../arguments/PaginatedArgs';
import ItemService from '../services/ItemSerivce';
import ItemEntry from '../structures/ItemEntry';

@Resolver(ItemEntry)
export default class ItemResolver {
  private itemService: ItemService;

  constructor() {
    this.itemService = new ItemService();
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single item based on a fuzzy search.',
      'You can supply skip and take to paginate the fuzzy search and reverse to show teh least likely results on top',
      'Reversal is applied before paginations!'
    ].join(''),
  })
  async getItemDetailsByFuzzy(@Args() {
    query, skip, take, reverse,
  }: PaginatedArgs) {
    const entry = this.itemService.findByName(query);

    if (!entry) {
      const fuzzyEntry = this.itemService.findByFuzzy({
        query, skip, take, reverse,
      });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for item: ${query}`);
      }
      query = fuzzyEntry[0].name;
    }

    const detailsEntry = this.itemService.findByNameWithDetails(query);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for item: ${query}`);
    }

    return detailsEntry;
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets details on a single item based on an exact name match.'
    ].join(''),
  })
  async getItemDetailsByName(@Arg('item') item: string) {
    const entry = this.itemService.findByNameWithDetails(item);

    if (entry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return entry;
  }

  @Query(() => GraphQLJSONObject, {
    description: [
      'Gets entries of multiple items based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  getItemByFuzzy(@Args() {
    query, skip, take, reverse,
  }: PaginatedArgs) {
    const itemEntries = this.itemService.findByFuzzy({
      query, skip, take, reverse,
    });

    if (itemEntries === undefined) {
      throw new Error(`Failed to get data for item: ${name}`);
    }

    return itemEntries;
  }

  @Query(() => GraphQLJSONObject, { description: 'Gets the entry of a single item based on name.' })
  getsItemByName(@Arg('name') name: string) {
    const itemEntry = this.itemService.findByName(name);

    if (itemEntry === undefined) {
      throw new Error(`Failed to get data for item: ${name}`);
    }

    return itemEntry;
  }
}
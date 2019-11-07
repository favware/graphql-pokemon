import {Arg, Args, Query, Resolver} from 'type-graphql';
import ItemService from '../services/ItemSerivce';
import ItemEntry from '../structures/ItemEntry';
import ItemPaginatedArgs from '../arguments/ItemPaginatedArgs';

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
    ].join(''),
  })
  async getItemDetailsByFuzzy(@Args() {
    item, skip, take, reverse,
  }: ItemPaginatedArgs) {
    const entry = this.itemService.findByName(item);

    if (!entry) {
      const fuzzyEntry = this.itemService.findByFuzzy({
        item, skip, take, reverse,
      });
      if (fuzzyEntry === undefined) {
        throw new Error(`Failed to get data for item: ${item}`);
      }
      item = fuzzyEntry[0].name;
    }

    const detailsEntry = this.itemService.findByNameWithDetails(item);
    if (detailsEntry === undefined) {
      throw new Error(`Failed to get data for item: ${item}`);
    }

    return detailsEntry;
  }

  @Query(() => ItemEntry, {
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

  @Query(() => [ ItemEntry ], {
    description: [
      'Gets entries of multiple items based on a fuzzy search.',
      'You can supply skip and take to limit the amount of flavour texts to return and reverse to show latest games on top.',
      'Reversal is applied before pagination!'
    ].join(''),
  })
  getItemByFuzzy(@Args() {
    item, skip, take, reverse,
  }: ItemPaginatedArgs) {
    const itemEntries = this.itemService.findByFuzzy({
      item, skip, take, reverse,
    });

    if (itemEntries === undefined) {
      throw new Error(`Failed to get data for item: ${name}`);
    }

    return itemEntries;
  }

  @Query(() => ItemEntry, { description: 'Gets the entry of a single item based on name.' })
  getsItemByName(@Arg('name') name: string) {
    const itemEntry = this.itemService.findByName(name);

    if (itemEntry === undefined) {
      throw new Error(`Failed to get data for item: ${name}`);
    }

    return itemEntry;
  }
}
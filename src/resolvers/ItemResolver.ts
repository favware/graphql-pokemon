import { FuzzyItemArgs } from '#arguments/FuzzyArgs/FuzzyItemArgs';
import { ItemArgs } from '#arguments/ItemArgs';
import { ItemService } from '#services/ItemSerivce';
import { Item } from '#structures/Item';
import { getRequestedFields } from '#utils/getRequestedFields';
import { GraphQLSet } from '#utils/GraphQLSet';
import { Args, Query, Resolver } from 'type-graphql';

@Resolver(Item)
export class ItemResolver {
  @Query(() => Item, {
    description: 'Gets the details on a Pokémon item, using the item name'
  })
  public getItem(@Args(() => ItemArgs) args: ItemArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Item>): Item {
    const itemData = ItemService.getByItemName(args);

    if (!itemData) {
      throw new Error(`No item found for ${args.item}`);
    }

    const graphqlObject = ItemService.mapItemDataToItemGraphQL({
      data: itemData,
      requestedFields
    });

    if (!graphqlObject) {
      throw new Error(`Failed to get data for item: ${args.item}`);
    }

    return graphqlObject;
  }

  @Query(() => [Item], {
    description: [
      'Gets details on a Pokémon item, using a fuzzy search on name',
      'This can be used to find multiple results based on the query',
      'By default only 1 result is returned. You can provide the arguments "take", "offset", and "reverse" to modify this behaviour.'
    ].join('\n')
  })
  public getFuzzyItem(@Args(() => FuzzyItemArgs) args: FuzzyItemArgs, @getRequestedFields() requestedFields: GraphQLSet<keyof Item>): Item[] {
    const fuzzyEntry = ItemService.findByFuzzy(args);

    if (!fuzzyEntry.length) {
      throw new Error(`No items found for: ${args.item}`);
    }

    const graphqlObjects = fuzzyEntry.map((itemData) => ItemService.mapItemDataToItemGraphQL({ data: itemData.item, requestedFields }));

    if (!graphqlObjects.length) {
      throw new Error(`Failed to get data for item: ${args.item}`);
    }

    return graphqlObjects;
  }
}

import ItemPaginatedArgs from '#arguments/ItemPaginatedArgs';
import items from '#assets/items';
import ItemEntry from '#structures/ItemEntry';
import { addPropertyToClass } from '#utils/addPropertyToClass';
import FuzzySearch from '#utils/FuzzySearch';
import type GraphQLSet from '#utils/GraphQLSet';
import type Pokemon from '#utils/pokemon';
import Util from '#utils/util';
import type Fuse from 'fuse.js';
import { Arg, Args } from 'type-graphql';

export default class ItemService {
  public findByName(@Arg('name') name: string): Pokemon.Item | undefined {
    return items.get(name);
  }

  public findByFuzzy(@Args() { item, skip, take, reverse }: ItemPaginatedArgs): Fuse.FuseResult<Pokemon.Item>[] {
    const fuzzyResult = new FuzzySearch(items, ['name'], { threshold: 0.3 }).runFuzzy(item);

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(itemData: Pokemon.Item, requestedFields: GraphQLSet<keyof ItemEntry>): ItemEntry {
    const itemEntry = new ItemEntry();

    addPropertyToClass(itemEntry, 'desc', itemData.desc, requestedFields);
    addPropertyToClass(itemEntry, 'name', itemData.name, requestedFields);
    addPropertyToClass(itemEntry, 'shortDesc', itemData.shortDesc, requestedFields);
    addPropertyToClass(itemEntry, 'isNonstandard', itemData.isNonstandard, requestedFields);
    addPropertyToClass(itemEntry, 'generationIntroduced', itemData.gen, requestedFields);
    addPropertyToClass(
      itemEntry,
      'sprite',
      itemData.specialSprite ?? `https://play.pokemonshowdown.com/sprites/itemicons/${Util.toLowerHyphenCase(itemData.name)}.png`,
      requestedFields
    );
    addPropertyToClass(
      itemEntry,
      'bulbapediaPage',
      `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(itemData.name)}`,
      requestedFields
    );
    addPropertyToClass(
      itemEntry,
      'serebiiPage',
      `https://www.serebii.net/itemdex/${Util.toLowerSingleWordCase(itemData.name)}.shtml`,
      requestedFields
    );
    if (!itemData.keyItem) {
      addPropertyToClass(itemEntry, 'smogonPage', `https://www.smogon.com/dex/ss/items/${Util.toLowerHyphenCase(itemData.name)}`, requestedFields);
    }

    return itemEntry;
  }
}

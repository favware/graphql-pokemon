import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args } from 'type-graphql';
import { itemAliases } from '../assets/aliases';
import items from '../assets/items';
import FuzzySearch from '../utils/FuzzySearch';
import ItemEntry from '../structures/ItemEntry';
import Util, { SimpleFuseOptions } from '../utils/util';
import ItemPaginatedArgs from '../arguments/ItemPaginatedArgs';

export default class ItemService {
  public findByName(@Arg('name') name: string) {
    return items.get(name);
  }

  public findByFuzzy(@Args() {
    item, skip, take, reverse,
  }: ItemPaginatedArgs, @Arg('fuseOptions', () => GraphQLJSONObject) fuseOptions?: SimpleFuseOptions) {
    const fuzzyItem = new FuzzySearch(items, [ 'name' ], { threshold: 0.3, ...fuseOptions });

    let fuzzyResult = fuzzyItem.runFuzzy(item);

    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(itemAliases, [ 'alias', 'item' ], { threshold: 0.4 }).runFuzzy(item);

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyItem.runFuzzy(fuzzyAliasResult[0].item);
      }
    }

    if (reverse) {
      fuzzyResult.reverse();
    }

    return fuzzyResult.slice(skip, skip + take);
  }

  public findByNameWithDetails(@Arg('item') item: string) {
    const itemData = this.findByName(item);

    if (!itemData) {
      throw new Error(`No item found for ${item}`);
    }

    const itemEntry = new ItemEntry();
    itemEntry.desc = itemData.desc;
    itemEntry.name = itemData.name;
    itemEntry.shortDesc = itemData.shortDesc;
    itemEntry.isNonstandard = itemData.isNonstandard;
    itemEntry.sprite = `https://play.pokemonshowdown.com/sprites/itemicons/${Util.toLowerHyphenCase(itemData.name)}.png`;
    itemEntry.bulbapediaPage = `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(itemData.name)}`;
    itemEntry.serebiiPage = `https://www.serebii.net/itemdex/${Util.toLowerSingleWordCase(itemData.name)}.shtml`;
    itemEntry.smogonPage = `https://www.smogon.com/dex/sm/items/${Util.toLowerHyphenCase(itemData.name)}`;

    return itemEntry;
  }
}
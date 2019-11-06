import { GraphQLJSONObject } from 'graphql-type-json';
import { Arg, Args } from 'type-graphql';
import PaginatedArgs from '../arguments/PaginatedArgs';
import { itemAliases } from '../assets/aliases';
import items from '../assets/items';
import { SimpleFuseOptions } from '../typings/common';
import FuzzySearch from '../utils/FuzzySearch';
import ItemEntry from '../structures/ItemEntry';
import Util from '../utils/util';

export default class ItemService {
  public findByName(@Arg('name') name: string) {
    return items.get(name);
  }

  public findByFuzzy(@Args() {
    query, skip, take, reverse,
  }: PaginatedArgs, @Arg('fuseOptions', () => GraphQLJSONObject) fuseOptions?: SimpleFuseOptions) {
    const fuzzyItem = new FuzzySearch(items, [ 'name', 'num' ], { threshold: 0.3, ...fuseOptions });

    let fuzzyResult = fuzzyItem.run(query);

    if (!fuzzyResult.length) {
      const fuzzyAliasResult = new FuzzySearch(itemAliases, [ 'alias', 'item' ], { threshold: 0.4 }).run(query);

      if (fuzzyAliasResult.length) {
        fuzzyResult = fuzzyItem.run(fuzzyAliasResult[0].item);
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
    itemEntry.num = itemData.num;
    itemEntry.shortDesc = itemData.shortDesc;
    itemEntry.bulbapediaPage = `https://bulbapedia.bulbagarden.net/wiki/${Util.toTitleSnakeCase(itemData.name)}`;
    itemEntry.serebiiPage = `https://www.serebii.net/itemdex/${Util.toLowerSingleWordCase(itemData.name)}.shtml`;
    itemEntry.smogonPage = `https://www.smogon.com/dex/sm/items/${Util.toLowerHyphenCase(itemData.name)}`;

    return itemEntry;
  }
}
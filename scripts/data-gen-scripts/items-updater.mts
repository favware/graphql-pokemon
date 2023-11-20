import type { PokemonTypes } from '#assets/pokemon-source.js';
import { importFileFromWeb } from '#scripts/utils';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import { items as currentItems } from '../../src/lib/assets/items.js';
import { dataToClipboard } from './data-to-clipboard.js';
import { sortObjectByKey } from './map-data-key-sorter.js';

const { Items } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/items.ts',
  temporaryFileName: 'items.mjs'
});

const { ItemsText } = await importFileFromWeb({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/items.ts',
  temporaryFileName: 'item-texts.mjs'
});

const itemDataEntries = Object.entries<ItemData>(Items);
const itemsTextEntries = Object.entries<ItemText>(ItemsText);

const newMap = new Map();

for (let [key, data] of currentItems.entries()) {
  Reflect.deleteProperty(data, 'key');

  const itemFromData: any = itemDataEntries.find(([itemKey]) => itemKey === key)?.at(1);
  const itemsFromText: any = itemsTextEntries.find(([itemTextKey]) => itemTextKey === key)?.at(1);

  if (itemFromData) {
    if (itemFromData.isNonstandard === 'Past') {
      data.isNonstandard = IsNonStandard.Past;
    } else if (itemFromData.isNonstandard === 'CAP') {
      data.isNonstandard = IsNonStandard.Cap;
    } else if (itemFromData.isNonstandard === 'Unobtainable') {
      data.isNonstandard = IsNonStandard.Unobtainable;
    } else {
      Reflect.deleteProperty(data, 'isNonstandard');
    }

    data.gen = itemFromData.gen;
    data.name = itemFromData.name;
  }

  if (itemsFromText) {
    data.desc = itemsFromText.desc;
    if (itemsFromText.shortDesc) {
      data.shortDesc = itemsFromText.shortDesc;
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, itemFromData] of itemDataEntries) {
  // Skip if the item is already in the map
  if (newMap.has(key)) continue;

  const itemsFromText = itemsTextEntries.find(([itemTextKey]) => itemTextKey === key)?.at(1);
  let castedItemsFromText = itemsFromText as ItemText;

  if (typeof itemsFromText === 'undefined' || typeof itemsFromText === 'string') {
    if (key === 'strangeball') {
      castedItemsFromText = {
        desc: 'In Pokémon Brilliant Diamond and Shining Pearl, Pokémon Legends: Arceus, and Pokémon Scarlet and Violet, Pokémon caught in Poké Balls that do not exist in that game instead display a Strange Ball as their Poké Ball.',
        shortDesc: 'A placeholder Poké Ball for Pokémon in Poké Balls that do not exist in the current game.',
        name: 'Strange Ball'
      };
    } else {
      console.error(`Missing item text for ${key}`);
      continue;
    }
  }

  let data: PokemonTypes.Item = {
    desc: castedItemsFromText.desc,
    gen: itemFromData.gen,
    name: itemFromData.name
  };

  if (itemFromData.isNonstandard === 'Past') {
    data.isNonstandard = IsNonStandard.Past;
  } else if (itemFromData.isNonstandard === 'CAP') {
    data.isNonstandard = IsNonStandard.Cap;
  } else if (itemFromData.isNonstandard === 'Unobtainable') {
    data.isNonstandard = IsNonStandard.Unobtainable;
  }

  if (castedItemsFromText.shortDesc) {
    data.shortDesc = castedItemsFromText.shortDesc;
  }

  newMap.set(key, sortObjectByKey(data));
}

dataToClipboard([...newMap.entries()]);

interface ItemData {
  name: string;
  spritenum: number;
  megaStone: string;
  megaEvolves: string;
  itemUser: string[];
  num: number;
  gen: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  isNonstandard: string;
}

interface ItemText {
  name: string;
  desc: string;
  shortDesc?: string;
}

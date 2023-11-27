import { items as currentItems } from '#assets/items.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import { importFileFromWeb, replacePokeWithAccentedPoke } from '../../utils.js';
import { dataToClipboard } from '../data-to-clipboard.js';
import { sortObjectByKey } from '../map-data-key-sorter.js';

const { Items } = await importFileFromWeb<{ Items: { [itemName: string]: ItemData } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/items.ts',
  temporaryFileName: 'items.js'
});

const { ItemsText } = await importFileFromWeb<{ ItemsText: { [itemName: string]: ItemText } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/items.ts',
  temporaryFileName: 'item-texts.js'
});

const itemsDataEntries = Object.entries<ItemData>(Items);
const itemsTextEntries = Object.entries<ItemText>(ItemsText);

const newMap = new Map();

for (const [key, data] of currentItems.entries()) {
  Reflect.deleteProperty(data, 'key');

  const itemFromData = itemsDataEntries.find(([itemKey]) => itemKey === key)?.at(1) as ItemData;
  const itemFromText = itemsTextEntries.find(([itemTextKey]) => itemTextKey === key)?.at(1) as ItemText;

  if (itemFromData) {
    if (itemFromData.isNonstandard === 'Past') {
      data.isNonstandard = IsNonStandard.Past;
    } else if (itemFromData.isNonstandard === 'CAP') {
      data.isNonstandard = IsNonStandard.Cap;
    } else if (itemFromData.isNonstandard === 'Unobtainable') {
      data.isNonstandard = IsNonStandard.Unobtainable;
    } else if (itemFromData.isNonstandard === 'LGPE') {
      data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
    } else if (itemFromData.isNonstandard === 'Gigantamax') {
      data.isNonstandard = IsNonStandard.Gigantamax;
    } else {
      Reflect.deleteProperty(data, 'isNonstandard');
    }

    data.gen = itemFromData.gen;
    data.name = itemFromData.name;
  }

  if (itemFromText) {
    data.desc = replacePokeWithAccentedPoke(itemFromText.desc);
    if (itemFromText.shortDesc) {
      data.shortDesc = replacePokeWithAccentedPoke(itemFromText.shortDesc);
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, itemFromData] of itemsDataEntries) {
  // Skip if the item is already in the map
  if (newMap.has(key)) continue;

  let itemFromText = itemsTextEntries.find(([itemTextKey]) => itemTextKey === key)?.at(1) as ItemText | undefined;

  if (!itemFromText) {
    if (key === 'strangeball') {
      itemFromText = {
        desc: 'In Pokémon Brilliant Diamond and Shining Pearl, Pokémon Legends: Arceus, and Pokémon Scarlet and Violet, Pokémon caught in Poké Balls that do not exist in that game instead display a Strange Ball as their Poké Ball.',
        shortDesc: 'A placeholder Poké Ball for Pokémon in Poké Balls that do not exist in the current game.',
        name: 'Strange Ball'
      };
    } else {
      console.error(`Missing item text for ${key}`);
      continue;
    }
  }

  const data: PokemonTypes.Item = {
    desc: replacePokeWithAccentedPoke(itemFromText.desc),
    gen: itemFromData.gen,
    name: itemFromData.name
  };

  if (itemFromData.isNonstandard === 'Past') {
    data.isNonstandard = IsNonStandard.Past;
  } else if (itemFromData.isNonstandard === 'CAP') {
    data.isNonstandard = IsNonStandard.Cap;
  } else if (itemFromData.isNonstandard === 'Unobtainable') {
    data.isNonstandard = IsNonStandard.Unobtainable;
  } else if (itemFromData.isNonstandard === 'LGPE') {
    data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
  } else if (itemFromData.isNonstandard === 'Gigantamax') {
    data.isNonstandard = IsNonStandard.Gigantamax;
  }

  if (itemFromText.shortDesc) {
    data.shortDesc = replacePokeWithAccentedPoke(itemFromText.shortDesc);
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

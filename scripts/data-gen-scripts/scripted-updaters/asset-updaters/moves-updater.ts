import { moves as currentMoves } from '#assets/moves.js';
import type { PokemonTypes } from '#assets/pokemon-source.js';
import { IsNonStandard } from '#utils/isNonStandardEnum.js';
import {
  importFileFromWeb,
  inspectData,
  replaceEnumLikeValues,
  replacePokeWithAccentedPoke,
  sortObjectByKey,
  writeDataToFileAndPrettify
} from '../../../utils.js';

// Note that manual checking is still required for "basePower" and "target" properties!

const { Moves } = await importFileFromWeb<{ Moves: { [moveName: string]: MoveData } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/moves.ts',
  temporaryFileName: 'moves.js'
});

const { MovesText } = await importFileFromWeb<{ MovesText: { [moveName: string]: MoveText } }>({
  url: 'https://raw.githubusercontent.com/smogon/pokemon-showdown/master/data/text/moves.ts',
  temporaryFileName: 'moves-texts.js'
});

const movesDataEntries = Object.entries<MoveData>(Moves);
const movesTextEntries = Object.entries<MoveText>(MovesText);

const newMap = new Map();

for (const [key, data] of currentMoves.entries()) {
  Reflect.deleteProperty(data, 'key');

  const moveFromData = movesDataEntries.find(([moveKey]) => moveKey === key)?.at(1) as MoveData | undefined;
  const moveFromText = movesTextEntries.find(([moveTextKey]) => moveTextKey === key)?.at(1) as MoveText | undefined;

  if (moveFromData) {
    if (moveFromData.isNonstandard === 'Past') {
      data.isNonstandard = IsNonStandard.Past;
    } else if (moveFromData.isNonstandard === 'CAP') {
      data.isNonstandard = IsNonStandard.Cap;
    } else if (moveFromData.isNonstandard === 'Unobtainable') {
      data.isNonstandard = IsNonStandard.Unobtainable;
    } else if (moveFromData.isNonstandard === 'LGPE') {
      data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
    } else if (moveFromData.isNonstandard === 'Gigantamax') {
      data.isNonstandard = IsNonStandard.Gigantamax;
    } else {
      Reflect.deleteProperty(data, 'isNonstandard');
    }

    if (moveFromData.accuracy === true) {
      data.accuracy = 100;
    } else {
      data.accuracy = moveFromData.accuracy as number;
    }

    if (moveFromData.contestType) {
      data.contestType = moveFromData.contestType;
    }

    data.category = moveFromData.category;
    data.pp = moveFromData.pp;
    data.priority = moveFromData.priority;
    data.name = moveFromData.name;
    data.type = moveFromData.type;
    data.cooldown = moveFromData.cooldown;
    data.plusMovePower = moveFromData.plusMovePower;
  }

  if (moveFromText) {
    if (key.startsWith('hiddenpower')) {
      data.shortDesc = "Varies in type based on the user's IVs.";
    } else {
      data.shortDesc = replacePokeWithAccentedPoke(moveFromText.shortDesc);
    }

    if (moveFromText.desc) {
      data.desc = replacePokeWithAccentedPoke(moveFromText.desc);
    }
  }

  newMap.set(key, sortObjectByKey(data));
}

for (const [key, moveFromData] of movesDataEntries) {
  // Skip if
  // 1. The move is already in the map
  // 2. The key is 10000000voltthunderbolt (which is named tenmillionvoltthunderbolt)
  // 3. The move is nihillight (which is missing text data in Showdown)
  if (newMap.has(key) || key === '10000000voltthunderbolt' || key === 'nihillight') continue;

  const moveFromText = movesTextEntries.find(([moveTextKey]) => moveTextKey === key)?.at(1) as MoveText | undefined;

  if (!moveFromText) {
    console.error(`Missing move text for ${key}`);
    continue;
  }

  const data: PokemonTypes.Move = {
    shortDesc: replacePokeWithAccentedPoke(moveFromText.shortDesc ?? ''),
    name: moveFromData.name,
    category: moveFromData.category,
    pp: moveFromData.pp,
    priority: moveFromData.priority,
    type: moveFromData.type
  } as PokemonTypes.Move;

  if (moveFromData.accuracy === true) {
    data.accuracy = 100;
  } else {
    data.accuracy = moveFromData.accuracy as number;
  }

  if (moveFromData.contestType) {
    data.contestType = moveFromData.contestType;
  }

  if (moveFromData.isNonstandard === 'Past') {
    data.isNonstandard = IsNonStandard.Past;
  } else if (moveFromData.isNonstandard === 'CAP') {
    data.isNonstandard = IsNonStandard.Cap;
  } else if (moveFromData.isNonstandard === 'Unobtainable') {
    data.isNonstandard = IsNonStandard.Unobtainable;
  } else if (moveFromData.isNonstandard === 'LGPE') {
    data.isNonstandard = IsNonStandard.LetsGoPikachuEevee;
  } else if (moveFromData.isNonstandard === 'Gigantamax') {
    data.isNonstandard = IsNonStandard.Gigantamax;
  }

  if (moveFromText.desc) {
    data.desc = replacePokeWithAccentedPoke(moveFromText.desc);
  }

  newMap.set(key, sortObjectByKey(data));
}

const prependContent = [
  "import type { PokemonTypes } from '#assets/pokemon-source';",
  "import { IsNonStandard } from '#utils/isNonStandardEnum';",
  "import { Collection } from '@discordjs/collection';",
  '',
  '/** The moves in Pokémon */',
  'export const moves = new Collection<string, PokemonTypes.Move>('
].join('\n');
const appendContent = [
  ');', //
  '',
  'for (const [key, value] of moves.entries()) {',
  '\tvalue.key = key;',
  '}',
  ''
].join('\n');

const content = replaceEnumLikeValues(inspectData([...newMap.entries()]));

await writeDataToFileAndPrettify(prependContent + content + appendContent, '#assets/moves.js');

interface MoveData {
  num: number;
  accuracy: boolean | number;
  basePower: number;
  category: PokemonTypes.MoveCategoryUnion;
  isNonstandard: string;
  name: string;
  pp: number;
  priority: number;
  flags: never;
  isZ: string;
  critRatio: number;
  secondary: null;
  target: string;
  type: `${Capitalize<keyof PokemonTypes.Types>}`;
  contestType: string;
  cooldown: number;
  plusMovePower: number;
}

interface MoveText {
  name: string;
  desc: string;
  shortDesc?: string;
}

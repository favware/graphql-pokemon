import _ from 'lodash';
import { entries } from '../../src/lib/assets/pokedex-data/gen9.js';
import { dataToClipboard } from './data-to-clipboard.js';

const dexEntryKeys = [
  'abilities',
  'aliases',
  'baseForme',
  'baseSpecies',
  'baseStats',
  'catchRate',
  'color',
  'cosmeticFormes',
  'eggGroups',
  'evoLevel',
  'evos',
  'evYields',
  'forme',
  'formeLetter',
  'genderRatio',
  'heightm',
  'isEggObtainable',
  'key',
  'levellingRate',
  'minimumHatchTime',
  'num',
  'otherFormes',
  'prevo',
  'specialBackSprite',
  'specialBulbapediaUrl',
  'specialShinyBackSprite',
  'specialShinySprite',
  'specialSprite',
  'species',
  'types',
  'weightkg'
];

const newMap = new Map();

for (const [species, data] of entries.values()) {
  const missingKeys = _.xorWith([...Object.keys(data)], dexEntryKeys);

  newMap.set(species, missingKeys);
}

dataToClipboard([...newMap.entries()]);

import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen2GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Gold', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Silver', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Crystal', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Stadium 2', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Gold', 'Silver', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Gold', 'Crystal', logPrefix);
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Gold', 'Stadium 2', logPrefix);
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Silver', 'Crystal', logPrefix);
  const double5 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Silver', 'Stadium 2', logPrefix);
  const double6 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Crystal', 'Stadium 2', logPrefix);

  return [single1, single2, single3, single4, double1, double2, double3, double4, double5, double6];
}

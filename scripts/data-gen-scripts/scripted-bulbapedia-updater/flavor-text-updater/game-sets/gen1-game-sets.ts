import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen1GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Red', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Blue', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Yellow', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Stadium', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Blue', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Yellow', logPrefix);
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Stadium', logPrefix);
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Blue', 'Yellow', logPrefix);
  const double5 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Blue', 'Stadium', logPrefix);
  const double6 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Yellow', 'Stadium', logPrefix);

  return [single1, single2, single3, single4, double1, double2, double3, double4, double5, double6];
}

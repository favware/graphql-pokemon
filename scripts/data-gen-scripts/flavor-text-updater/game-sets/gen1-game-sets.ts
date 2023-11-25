import { flavorsModule } from '#utils/flavorsModule';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen1GameSetsData(text: string, pokemon: ParsedPokemon) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Red');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Blue');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Yellow');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Stadium');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Blue');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Yellow');
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Red', 'Stadium');
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Blue', 'Yellow');
  const double5 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Blue', 'Stadium');
  const double6 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Yellow', 'Stadium');

  return [single1, single2, single3, single4, double1, double2, double3, double4, double5, double6];
}

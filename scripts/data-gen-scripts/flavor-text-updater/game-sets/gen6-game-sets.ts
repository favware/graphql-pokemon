import { flavorsModule } from '#utils/flavorsModule';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen6GameSetsData(text: string, pokemon: ParsedPokemon) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'X');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Y');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Omega Ruby');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Alpha Sapphire');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'X', 'Y');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Omega Ruby', 'Alpha Sapphire');

  return [single1, single2, single3, single4, double1, double2];
}

import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen6GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'X', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Y', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Omega Ruby', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Alpha Sapphire', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'X', 'Y', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Omega Ruby', 'Alpha Sapphire', logPrefix);

  return [single1, single2, single3, single4, double1, double2];
}

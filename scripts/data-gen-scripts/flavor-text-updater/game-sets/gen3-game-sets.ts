import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';
import { tripleGameUpdater } from '../parsers/triple-game-updater.js';

export async function getGen3GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ruby');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sapphire');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Emerald');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'LeafGreen');
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'FireRed');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Sapphire');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Emerald');
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sapphire', 'Emerald');
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'LeafGreen', 'FireRed');

  const triple1 = await tripleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Sapphire', 'Emerald');

  return [single1, single2, single3, single4, single5, double1, double2, double3, double4, triple1];
}

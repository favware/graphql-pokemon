import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen5GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Black');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'White');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Black 2');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'White 2');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Black', 'White');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Black 2', 'White 2');

  return [single1, single2, single3, single4, double1, double2];
}

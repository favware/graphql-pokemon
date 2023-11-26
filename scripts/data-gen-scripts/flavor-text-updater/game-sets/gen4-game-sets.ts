import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';
import { tripleGameUpdater } from '../parsers/triple-game-updater.js';

export async function getGen4GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Diamond');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Pearl');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Platinum');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'HeartGold');
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'SoulSilver');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Pearl');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Platinum');
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Pearl', 'Platinum');
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'HeartGold', 'SoulSilver');

  const triple1 = await tripleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Pearl', 'Platinum');

  return [single1, single2, single3, single4, single5, double1, double2, double3, double4, triple1];
}

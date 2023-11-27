import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';
import { tripleGameUpdater } from '../parsers/triple-game-updater.js';

export async function getGen4GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Diamond', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Pearl', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Platinum', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'HeartGold', logPrefix);
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'SoulSilver', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Pearl', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Platinum', logPrefix);
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Pearl', 'Platinum', logPrefix);
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'HeartGold', 'SoulSilver', logPrefix);

  const triple1 = await tripleGameUpdater(text, flavorsModule, pokemon, 'Diamond', 'Pearl', 'Platinum', logPrefix);

  return [single1, single2, single3, single4, single5, double1, double2, double3, double4, triple1];
}

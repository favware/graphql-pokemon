import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen8GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sword', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Shield', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Brilliant Diamond', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Shining Pearl', logPrefix);
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'Legends: Arceus', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sword', 'Shield', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Brilliant Diamond', 'Shining Pearl', logPrefix);

  return [single1, single2, single3, single4, single5, double1, double2];
}

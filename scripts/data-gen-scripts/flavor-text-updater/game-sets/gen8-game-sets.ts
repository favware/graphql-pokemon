import { flavorsModule } from '#utils/flavorsModule';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen8GameSetsData(text: string, pokemon: ParsedPokemon) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sword');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Shield');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Brilliant Diamond');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Shining Pearl');
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'Legends: Arceus');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sword', 'Shield');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Brilliant Diamond', 'Shining Pearl');

  return [single1, single2, single3, single4, single5, double1, double2];
}

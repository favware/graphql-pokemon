import { flavorsModule } from '#utils/flavorsModule';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen9GameSetsData(text: string, pokemon: ParsedPokemon) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Scarlet');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Violet');

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Scarlet', 'Violet');

  return [single1, single2, double1];
}

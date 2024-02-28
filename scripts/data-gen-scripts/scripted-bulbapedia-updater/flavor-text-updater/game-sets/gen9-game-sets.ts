import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen9GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Scarlet', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Violet', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Scarlet', 'Violet', logPrefix);

  return [single1, single2, double1];
}

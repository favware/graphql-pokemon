import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../../utils/bulbapedia-utils.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getPokopiaGameData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Pokopia', logPrefix);

  return [single1];
}

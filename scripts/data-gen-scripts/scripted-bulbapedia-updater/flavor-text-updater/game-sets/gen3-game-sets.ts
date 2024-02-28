import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';
import { tripleGameUpdater } from '../parsers/triple-game-updater.js';

export async function getGen3GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ruby', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sapphire', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Emerald', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'LeafGreen', logPrefix);
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, 'FireRed', logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Sapphire', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Emerald', logPrefix);
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sapphire', 'Emerald', logPrefix);
  const double4 = await doubleGameUpdater(text, flavorsModule, pokemon, 'LeafGreen', 'FireRed', logPrefix);

  const triple1 = await tripleGameUpdater(text, flavorsModule, pokemon, 'Ruby', 'Sapphire', 'Emerald', logPrefix);

  return [single1, single2, single3, single4, single5, double1, double2, double3, double4, triple1];
}

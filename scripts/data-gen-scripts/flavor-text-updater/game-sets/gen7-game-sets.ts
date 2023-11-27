import type { FlavorsModule } from '#utils/flavorsModule.js';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen7GameSetsData(text: string, pokemon: ParsedPokemon, flavorsModule: FlavorsModule, logPrefix: string) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sun', logPrefix);
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Moon', logPrefix);
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ultra Sun', logPrefix);
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ultra Moon', logPrefix);
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, "Let's Go Pikachu", logPrefix);
  const single6 = await singleGameUpdater(text, flavorsModule, pokemon, "Let's Go Eevee", logPrefix);

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sun', 'Moon', logPrefix);
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ultra Sun', 'Ultra Moon', logPrefix);
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, "Let's Go Pikachu", "Let's Go Eevee", logPrefix);

  return [single1, single2, single3, single4, single5, single6, double1, double2, double3];
}

import { flavorsModule } from '#utils/flavorsModule';
import type { ParsedPokemon } from '../constants.js';
import { doubleGameUpdater } from '../parsers/double-game-updater.js';
import { singleGameUpdater } from '../parsers/single-game-updater.js';

export async function getGen7GameSetsData(text: string, pokemon: ParsedPokemon) {
  const single1 = await singleGameUpdater(text, flavorsModule, pokemon, 'Sun');
  const single2 = await singleGameUpdater(text, flavorsModule, pokemon, 'Moon');
  const single3 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ultra Sun');
  const single4 = await singleGameUpdater(text, flavorsModule, pokemon, 'Ultra Moon');
  const single5 = await singleGameUpdater(text, flavorsModule, pokemon, "Let's Go Pikachu");
  const single6 = await singleGameUpdater(text, flavorsModule, pokemon, "Let's Go Eevee");

  const double1 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Sun', 'Moon');
  const double2 = await doubleGameUpdater(text, flavorsModule, pokemon, 'Ultra Sun', 'Ultra Moon');
  const double3 = await doubleGameUpdater(text, flavorsModule, pokemon, "Let's Go Pikachu", "Let's Go Eevee");

  return [single1, single2, single3, single4, single5, single6, double1, double2, double3];
}

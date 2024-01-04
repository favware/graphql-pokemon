import type { Pokemon } from '../codegen/graphql-pokemon';
import { isCapPokemon, isM00, isMissingNo } from './guards';
import { parseBulbapediaURL } from './parseBulbapediaUrl';

/**
 * Transforms the Bulbapedia URL for a given Pokemon.
 *
 * This function takes in the details of a Pokemon and returns the corresponding Bulbapedia URL
 * - If the Pokemon is MissingNo, it returns the URL for MissingNo on Bulbapedia.
 * - If the Pokemon is M00, it returns the URL for M00 on Bulbapedia.
 *
 * @param pokemon - The details of the Pokemon.
 * @returns The resolved Bulbapedia embedded URL.
 *
 * @throws This function will not work for CAP or PokéStar Pokémon as they do not have Bulbapedia pages.
 * This function will throw a {@link RangeError} when a Pokémon with {@link Pokemon.num} < 0 is passed in.
 *
 * @example
 * ```typescript
 * const pokeDetails: Pokemon = {
 *   name: "Pikachu",
 *   type: "Electric",
 *   level: 25
 * };
 *
 * const url = resolveBulbapediaURL(pokeDetails);
 * // Returns: "[Bulbapedia](<https://bulbapedia.bulbagarden.net/wiki/Pikachu>)"
 * ```
 */
export function resolveBulbapediaURL(pokemon: Pokemon) {
  if (isCapPokemon(pokemon)) throw new RangeError('This function does not work for CAP or PokéStar Pokémon.');

  return isMissingNo(pokemon)
    ? 'https://bulbapedia.bulbagarden.net/wiki/MissingNo.'
    : isM00(pokemon)
      ? "https://bulbapedia.bulbagarden.net/wiki/'M_(00)"
      : parseBulbapediaURL(pokemon.bulbapediaPage);
}

import type { Pokemon } from '../codegen/graphql-pokemon';
import { isCapPokemon, isMissingNoOrM00 } from './guards';

/**
 * Resolves the Serebii URL for a given Pokemon.
 * If the Pokemon is MissingNo or M00, it returns the URL for MissingNo's Serebii page.
 * Otherwise, it returns the URL specified in the `serebiiPage` property of the Pokemon object.
 *
 * @param pokemon The details of the Pokemon.
 * @returns The Serebii URL for the Pokemon.
 *
 * @throws This function will not work for CAP or PokéStar Pokémon as they do not have Serebii pages.
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
 * const url = resolveSerebiiUrl(pokeDetails);
 * // Returns: "https://www.serebii.net/pokedex/025.shtml"
 * ```
 */
export function resolveSerebiiUrl(pokemon: Pokemon) {
  if (isCapPokemon(pokemon)) throw new RangeError('This function does not work for CAP or PokéStar Pokémon.');

  return isMissingNoOrM00(pokemon) ? 'https://www.serebii.net/pokedex/000.shtml' : pokemon.serebiiPage;
}

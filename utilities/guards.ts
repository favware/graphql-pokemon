import { PokemonEnum, type Pokemon } from '../codegen/graphql-pokemon';

/**
 * Checks if the given Pokemon is MissingNo.
 *
 * This uses the Pokemon's key, rather than the number.
 * To check if it's either MissingNo or M00, use {@link isMissingNoOrM00}.
 *
 * @param pokemon - The Pokemon object to check.
 * @returns `true` if the Pokemon is MissingNo, `false` otherwise.
 */
export function isMissingNo(pokemon: Pokemon) {
  return pokemon.key === PokemonEnum.Missingno;
}

/**
 * Checks if the given Pokemon is M00.
 *
 * This uses the Pokemon's key, rather than the number.
 * To check if it's either MissingNo or M00, use {@link isMissingNoOrM00}.
 *
 * @param pokemon - The Pokemon to check.
 * @returns `true` if the Pokemon is M00, `false` otherwise.
 */
export function isM00(pokemon: Pokemon) {
  return pokemon.key === PokemonEnum.M00;
}

/**
 * Checks if the given Pokemon is either MissingNo or M00.
 *
 * This uses the Pokemon's key, rather than the number.
 * This performs both {@link isMissingNo} and {@link isM00}.
 *
 * @param pokemon - The Pokemon to check.
 * @returns `true` if the Pokemon is MissingNo or M00, `false` otherwise.
 */
export function isMissingNoOrM00(pokemon: Pokemon) {
  return isMissingNo(pokemon) || isM00(pokemon);
}

/**
 * Checks if a Pokemon is a Cap Pokemon by checking if the number is below (not equal to) 0.
 *
 * MissingNo and M00 are not considered Cap Pokemon,
 * to check if the Pokémon is either of those, use {@link isMissingNoOrM00}.
 *
 * @param pokemon - The details of the Pokemon.
 * @returns `true` if the Pokemon is a Cap Pokemon, `false` otherwise.
 */
export function isCapPokemon(pokemon: Pokemon) {
  return pokemon.num < 0;
}

/**
 * Checks if a given Pokemon is a not a CAP Pokémon nor MissingNo nor M00.
 * This checks if the number is above (not equal to) 0.
 *
 * @param pokemon - The details of the Pokemon.
 * @returns `true` if the Pokemon is regular, `false` otherwise.
 */
export function isRegularPokemon(pokemon: Pokemon) {
  return pokemon.num > 0;
}

import type { NonNullish } from '#types/utility-types';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetPokemonByDexNumberArgs extends BasePokemonArgs {
  /**
   * The International PokéDex number of the Pokémon to look up
   */
  number: number;
}

const getPokemonByDexNumberSchema: SchemaOf<GetPokemonByDexNumberArgs> = basePokemonArgsSchema.extend({
  number: s.number.greaterThanOrEqual(-72).lessThanOrEqual(1025).or(s.number.greaterThanOrEqual(-5014).lessThanOrEqual(-5000))
});

export function validateGetPokemonByDexNumberArgs(args: GetPokemonByDexNumberArgs): NonNullish<GetPokemonByDexNumberArgs> {
  return getPokemonByDexNumberSchema.parse(args);
}

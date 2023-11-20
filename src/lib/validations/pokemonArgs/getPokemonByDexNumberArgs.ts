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
  number: s.number.greaterThanOrEqual(-68).lessThanOrEqual(905)
});

export function validateGetPokemonByDexNumberArgs(args: GetPokemonByDexNumberArgs): NonNullish<GetPokemonByDexNumberArgs> {
  return getPokemonByDexNumberSchema.parse(args);
}

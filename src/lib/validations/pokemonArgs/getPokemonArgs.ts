import type { NonNullish } from '#types/utility-types';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetPokemonArgs extends BasePokemonArgs {
  /**
   * The Pokémon to look up
   */
  pokemon: string;
}

export const getPokemonSchema: SchemaOf<GetPokemonArgs> = basePokemonArgsSchema.extend({
  pokemon: s.string
});

export function validateGetPokemonArgs(args: GetPokemonArgs): NonNullish<GetPokemonArgs> {
  return getPokemonSchema.parse(args);
}

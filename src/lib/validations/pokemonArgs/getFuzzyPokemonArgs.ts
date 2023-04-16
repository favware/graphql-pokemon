import type { NonNullish } from '#utils/utilTypes';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base.ts';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetFuzzyPokemonArgs extends BaseFuzzyArgs, BasePokemonArgs {
  /**
   * The Pokémon to fuzzily search
   */
  pokemon: string;
}

const getFuzzyPokemonSchema: SchemaOf<GetFuzzyPokemonArgs> = baseFuzzySchema //
  .extend(basePokemonArgsSchema)
  .extend({
    pokemon: s.string
  });

export function validateGetFuzzyPokemonArgs(args: GetFuzzyPokemonArgs): NonNullish<GetFuzzyPokemonArgs> {
  return getFuzzyPokemonSchema.parse(args);
}

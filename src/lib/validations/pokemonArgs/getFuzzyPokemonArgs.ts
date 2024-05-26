import type { NonNullish } from '#types/utility-types';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';
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
    pokemon: s.string({ message: 'The Pokémon has to be a string' })
  });

export function validateGetFuzzyPokemonArgs(args: GetFuzzyPokemonArgs): NonNullish<GetFuzzyPokemonArgs> {
  return getFuzzyPokemonSchema.parse(args);
}

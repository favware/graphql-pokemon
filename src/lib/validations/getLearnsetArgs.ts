import type { NonNullish } from '#types/utility-types';
import { getPokemonSchema, type GetPokemonArgs } from '#validations/pokemonArgs/getPokemonArgs';
import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface GetLearnsetArgs extends GetPokemonArgs {
  /**
   * The moves to match against the Pokémon
   */
  moves: string[];
  /**
   * The generation filter to apply
   */
  generation: number | Nullish;
}

const getLearnsetSchema: SchemaOf<GetLearnsetArgs> = getPokemonSchema.extend({
  moves: s.array(s.string).unique.lengthGreaterThanOrEqual(1),
  generation: s.number.int
    .greaterThanOrEqual(1)
    .lessThanOrEqual(9)
    .nullish.transform((v) => v ?? 9)
});

export function validateGetLearnsetArgs(args: GetLearnsetArgs): NonNullish<GetLearnsetArgs> {
  return getLearnsetSchema.parse(args);
}

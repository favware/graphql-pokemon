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
  moves: s
    .array(
      s.string({ message: 'The move has to be a string' }), //
      { message: 'The list of moves has to be an array' }
    )
    .unique({ message: 'The list of moves should be a unique list with no duplicates' })
    .lengthGreaterThanOrEqual(1, { message: 'The list of moves should have at least one move' }),
  generation: s
    .number({ message: 'The generation has to be a number' })
    .int({ message: 'The generation has to be an integer' })
    .greaterThanOrEqual(1, { message: 'The minimum generation is 1' })
    .lessThanOrEqual(9, { message: 'The maximum generation is 9' })
    .nullish({ message: 'The generation has to be a number' })
    .transform((v) => v ?? 9)
});

export function validateGetLearnsetArgs(args: GetLearnsetArgs): NonNullish<GetLearnsetArgs> {
  return getLearnsetSchema.parse(args);
}

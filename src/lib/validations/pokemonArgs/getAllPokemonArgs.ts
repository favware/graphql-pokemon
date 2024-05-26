import type { NonNullish } from '#types/utility-types';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface GetAllPokemonArgs extends BaseFuzzyArgs, BasePokemonArgs {
  /**
   * Sets the offset where to start
   * @default 0
   * @minimum 0
   * @maximum 1422
   */
  offset: number | Nullish;
  /**
   * Return only this many results, starting from the offset
   * @default 1423
   * @minimum 1
   * @maximum 1423
   */
  take: number | Nullish;
}

const getAllPokemonSchema: SchemaOf<GetAllPokemonArgs> = baseFuzzySchema //
  .extend(basePokemonArgsSchema)
  .extend({
    offset: s
      .number({ message: 'The offset has to be a number' })
      .greaterThanOrEqual(0, { message: 'The offset has to be at least 0' })
      .lessThanOrEqual(1422, { message: 'The offset has to be at most 1422' })
      .nullish({ message: 'The offset has to be a number' })
      .transform((v) => v ?? 0),
    take: s
      .number({ message: 'The amount to take has to be a number' })
      .greaterThanOrEqual(1, { message: 'The amount to take has to be at least 1' })
      .lessThanOrEqual(1423, { message: 'The amount to take has to be at most 1423' })
      .nullish({ message: 'The amount to take has to be a number' })
      .transform((v) => v ?? 1)
  });

export function validateGetAllPokemonArgs(args: GetAllPokemonArgs): NonNullish<GetAllPokemonArgs> {
  return getAllPokemonSchema.parse(args);
}

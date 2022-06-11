import type { NonNullish } from '#utils/utilTypes';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base.ts';
import { BasePokemonArgs, basePokemonArgsSchema } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface GetAllPokemonArgs extends BaseFuzzyArgs, BasePokemonArgs {
  /**
   * Return only this many results, starting from the offset
   * @default 1273
   * @minimum 1
   * @maximum 1273
   */
  take: number | Nullish;
}

const getAllPokemonSchema: SchemaOf<GetAllPokemonArgs> = baseFuzzySchema //
  .extend(basePokemonArgsSchema)
  .extend({
    take: s.number
      .greaterThanOrEqual(1)
      .lessThanOrEqual(1273)
      .nullish.transform((v) => v ?? 1)
  });

export function validateGetAllPokemonArgs(args: GetAllPokemonArgs): NonNullish<GetAllPokemonArgs> {
  return getAllPokemonSchema.parse(args);
}

import type { NonNullish } from '#utils/utilTypes';
import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base.ts';
import { basePokemonArgsSchema, type BasePokemonArgs } from '#validations/pokemonArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface GetAllPokemonArgs extends BaseFuzzyArgs, BasePokemonArgs {
  /**
   * Sets the offset where to start
   * @default 0
   * @minimum 0
   * @maximum 1389
   */
  offset: number | Nullish;
  /**
   * Return only this many results, starting from the offset
   * @default 1392
   * @minimum 1
   * @maximum 1392
   */
  take: number | Nullish;
}

const getAllPokemonSchema: SchemaOf<GetAllPokemonArgs> = baseFuzzySchema //
  .extend(basePokemonArgsSchema)
  .extend({
    offset: s.number
      .greaterThanOrEqual(0)
      .lessThanOrEqual(1389)
      .nullish.transform((v) => v ?? 0),
    take: s.number
      .greaterThanOrEqual(1)
      .lessThanOrEqual(1392)
      .nullish.transform((v) => v ?? 1)
  });

export function validateGetAllPokemonArgs(args: GetAllPokemonArgs): NonNullish<GetAllPokemonArgs> {
  return getAllPokemonSchema.parse(args);
}

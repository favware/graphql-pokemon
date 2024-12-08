import type { NonNullish } from '#types/utility-types';
import { baseFuzzySchema } from '#validations/fuzzyArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface GetNatureArgs {
  /**
   * The nature to look up
   */
  nature: string;
}

export interface GetAllNaturesArgs {
  /**
   * Sets the offset where to start
   * @default 0
   * @minimum 0
   * @maximum 25
   */
  offset: number | Nullish;
  /**
   * Return only this many results, starting from the offset
   * @default 26
   * @minimum 1
   * @maximum 26
   */
  take: number | Nullish;
}

const getNatureSchema: SchemaOf<GetNatureArgs> = s.object({
  nature: s.string({ message: 'The nature has to be a string' })
});

const getAllNaturesSchema: SchemaOf<GetAllNaturesArgs> = baseFuzzySchema //
  .extend({
    offset: s
      .number({ message: 'The offset has to be a number' })
      .greaterThanOrEqual(0, { message: 'The offset has to be at least 0' })
      .lessThanOrEqual(25, { message: 'The offset has to be at most 25' })
      .nullish({ message: 'The offset has to be a number' })
      .transform((v) => v ?? 0),
    take: s
      .number({ message: 'The amount to take has to be a number' })
      .greaterThanOrEqual(1, { message: 'The amount to take has to be at least 1' })
      .lessThanOrEqual(26, { message: 'The amount to take has to be at most 26' })
      .nullish({ message: 'The amount to take has to be a number' })
      .transform((v) => v ?? 1)
  });

export function validateGetNatureArgs(args: GetNatureArgs): GetNatureArgs {
  return getNatureSchema.parse(args);
}

export function validateGetAllNaturesArgs(args: GetAllNaturesArgs): NonNullish<GetAllNaturesArgs> {
  return getAllNaturesSchema.parse(args);
}

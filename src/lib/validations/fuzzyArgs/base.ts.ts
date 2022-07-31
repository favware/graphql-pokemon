import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface BaseFuzzyArgs {
  /**
   * Sets the offset where to start
   * @default 0
   * @minimum 0
   */
  offset: number | Nullish;

  /**
   * Return only this many results, starting from the offset
   * @default 1
   * @minimum 1
   * @maximum 50
   */
  take: number | Nullish;

  /**
   * Reverses the dataset before paginating
   * @default false
   */
  reverse: boolean | Nullish;
}

export const baseFuzzySchema: SchemaOf<BaseFuzzyArgs> = s.object({
  take: s.number
    .greaterThanOrEqual(1)
    .lessThanOrEqual(50)
    .nullish.transform((v) => v ?? 1),
  offset: s.number.greaterThanOrEqual(0).nullish.transform((v) => v ?? 0),
  reverse: s.boolean.nullish.transform((v) => v ?? false)
});

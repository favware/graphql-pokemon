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
  take: s
    .number({ message: 'The amount to take has to be a number' })
    .greaterThanOrEqual(1, { message: 'You have to take at least 1 result' })
    .lessThanOrEqual(50, { message: 'You can only take up to 50 results' })
    .nullish({ message: 'The amount to take has to be a number' })
    .transform((v) => v ?? 1),
  offset: s
    .number({ message: 'The offset has to be a number' })
    .greaterThanOrEqual(0, { message: 'The offset has to be at least 0' })
    .nullish({ message: 'The offset has to be a number' })
    .transform((v) => v ?? 0),
  reverse: s
    .boolean({ message: 'The reverse flag has to be a boolean' })
    .nullish({ message: 'The reverse flag has to be a boolean' })
    .transform((v) => v ?? false)
});

import { s, type SchemaOf } from '@sapphire/shapeshift';
import type { Nullish } from '@sapphire/utilities';

export interface BasePokemonArgs {
  /**
   * Sets the offset from where to start.
   */
  offsetFlavorTexts: number | Nullish;

  /**
   * Return this many flavour texts, up to the maximum of entries that the requested Pokémon has.
   */
  takeFlavorTexts: number | Nullish;

  /**
   * Whether to reverse the list of games from which to get the data.
   * By default Generation 1 is considered for "take" first, when setting this to true that is instead Generation 9.
   */
  reverseFlavorTexts: boolean | Nullish;
}

export const basePokemonArgsSchema: SchemaOf<BasePokemonArgs> = s.object({
  offsetFlavorTexts: s
    .number({ message: 'The offset has to be a number' })
    .greaterThanOrEqual(0, { message: 'The offset has to be at least 0' })
    .nullish({ message: 'The offset has to be a number' })
    .transform((v) => v ?? 0),
  takeFlavorTexts: s
    .number({ message: 'The amount of flavor texts to take has to be a number' })
    .greaterThanOrEqual(1, { message: 'You have to take at least 1 result' })
    .lessThanOrEqual(50, { message: 'You can only take up to 50 results' })
    .nullish({ message: 'The amount of flavor texts to take has to be a number' })
    .transform((v) => v ?? 1),
  reverseFlavorTexts: s
    .boolean({ message: 'The reverse flag has to be a boolean' })
    .nullish({ message: 'The reverse flag has to be a boolean' })
    .transform((v) => v ?? true)
});

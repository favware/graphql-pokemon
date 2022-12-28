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
  offsetFlavorTexts: s.number.greaterThanOrEqual(0).nullish.transform((v) => v ?? 0),
  takeFlavorTexts: s.number
    .greaterThanOrEqual(1)
    .lessThanOrEqual(50)
    .nullish.transform((v) => v ?? 1),
  reverseFlavorTexts: s.boolean.nullish.transform((v) => v ?? true)
});

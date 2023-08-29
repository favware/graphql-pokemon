import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetFuzzyItemArgs extends BaseFuzzyArgs {
  /**
   * The item to fuzzily search
   */
  item: string;
}

const getFuzzyItemSchema: SchemaOf<GetFuzzyItemArgs> = baseFuzzySchema.extend({
  item: s.string
});

export function validateGetFuzzyItemArgs(args: GetFuzzyItemArgs): GetFuzzyItemArgs {
  return getFuzzyItemSchema.parse(args);
}

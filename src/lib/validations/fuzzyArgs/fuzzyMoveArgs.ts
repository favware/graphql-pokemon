import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetFuzzyMoveArgs extends BaseFuzzyArgs {
  /**
   * The move to fuzzily search
   */
  move: string;
}

const getFuzzyMoveSchema: SchemaOf<GetFuzzyMoveArgs> = baseFuzzySchema.extend({
  move: s.string
});

export function validateGetFuzzyMoveArgs(args: GetFuzzyMoveArgs): GetFuzzyMoveArgs {
  return getFuzzyMoveSchema.parse(args);
}

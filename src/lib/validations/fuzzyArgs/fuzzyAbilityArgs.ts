import { baseFuzzySchema, type BaseFuzzyArgs } from '#validations/fuzzyArgs/base';
import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetFuzzyAbilityArgs extends BaseFuzzyArgs {
  /**
   * The ability to fuzzily search
   */
  ability: string;
}

const getFuzzyAbilitySchema: SchemaOf<GetFuzzyAbilityArgs> = baseFuzzySchema.extend({
  ability: s.string
});

export function validateGetFuzzyAbilityArgs(args: GetFuzzyAbilityArgs): GetFuzzyAbilityArgs {
  return getFuzzyAbilitySchema.parse(args);
}

import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetAbilityArgs {
  /**
   * The ability to look up
   */
  ability: string;
}

const getAbilitySchema: SchemaOf<GetAbilityArgs> = s.object({
  ability: s.string({ message: 'The ability has to be a string' })
});

export function validateGetAbilityArgs(args: GetAbilityArgs): GetAbilityArgs {
  return getAbilitySchema.parse(args);
}

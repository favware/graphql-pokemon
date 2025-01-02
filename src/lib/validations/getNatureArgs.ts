import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetNatureArgs {
  /**
   * The nature to look up
   */
  nature: string;
}

const getNatureSchema: SchemaOf<GetNatureArgs> = s.object({
  nature: s.string({ message: 'The nature has to be a string' })
});

export function validateGetNatureArgs(args: GetNatureArgs): GetNatureArgs {
  return getNatureSchema.parse(args);
}

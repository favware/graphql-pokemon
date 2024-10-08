import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetMoveArgs {
  /**
   * The move to look up
   */
  move: string;
}

const getMoveSchema: SchemaOf<GetMoveArgs> = s.object({
  move: s.string({ message: 'The move has to be a string' })
});

export function validateGetMoveArgs(args: GetMoveArgs): GetMoveArgs {
  return getMoveSchema.parse(args);
}

import { s, type SchemaOf } from '@sapphire/shapeshift';

export interface GetItemArgs {
  /**
   * The item to look up
   */
  item: string;
}

const getItemSchema: SchemaOf<GetItemArgs> = s.object({
  item: s.string
});

export function validateGetItemArgs(args: GetItemArgs): GetItemArgs {
  return getItemSchema.parse(args);
}

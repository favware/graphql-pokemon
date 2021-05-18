import PaginatedArgs from '#arguments/PaginatedArgs';
import moveData from '#assets/moves';
import { ArgsType, Field } from 'type-graphql';

export const moves = moveData.enumObject();

@ArgsType()
export default class MovePaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The move to look up' })
  public move!: string;
}

import { ArgsType, Field } from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';

@ArgsType()
export default class MovePaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The move to look up' })
  move: string;
}
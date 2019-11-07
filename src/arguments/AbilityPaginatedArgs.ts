import {ArgsType, Field} from 'type-graphql';
import PaginatedArgs from './PaginatedArgs';

@ArgsType()
export default class AbilityPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The data to look up' })
  ability: string;
}
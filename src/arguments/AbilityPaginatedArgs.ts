import { ArgsType, Field } from 'type-graphql';
import abilitiesData from '../assets/abilities';
import PaginatedArgs from './PaginatedArgs';

export const abilities = abilitiesData.enumObject();

@ArgsType()
export default class AbilityPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The ability to look up' })
  public ability!: string;
}

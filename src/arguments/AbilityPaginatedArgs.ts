import PaginatedArgs from '#arguments/PaginatedArgs';
import abilitiesData from '#assets/abilities';
import { ArgsType, Field } from 'type-graphql';

export const abilities = abilitiesData.enumObject();

@ArgsType()
export default class AbilityPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The ability to look up' })
  public ability!: string;
}

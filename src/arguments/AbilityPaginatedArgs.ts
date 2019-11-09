import { ArgsType, Field } from 'type-graphql';
import abilities from '../assets/abilities';
import PaginatedArgs from './PaginatedArgs';

export const Abilities = abilities.enumObject();

@ArgsType()
export default class AbilityPaginatedArgs extends PaginatedArgs {
  @Field(() => String, { description: 'The ability to look up' })
  ability: string;
}
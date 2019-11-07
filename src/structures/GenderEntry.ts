import { Field, ObjectType } from 'type-graphql';
import { GenderUnion } from './RegularExpression';
import Pokemon from '../typings/pokemon';

@ObjectType({ description: 'A Pokémon gender ratio entry' })
export default class GenderEntry {
  @Field(() => String, { description: 'The percentage of male occurrences' })
  male: string;

  @Field(() => String, { description: 'The percentage for female occurrences' })
  female: string;

  @Field(() => GenderUnion, { nullable: true, description: 'The special case gender for a Pokémon' })
  special?: Pokemon.GendersUnion;
}
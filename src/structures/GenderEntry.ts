import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon gender ratio entry' })
export default class GenderEntry {
  @Field(() => String, { description: 'The percentage of male occurrences' })
  male: string;

  @Field(() => String, { description: 'The percentage for female occurrences' })
  female: string;
}

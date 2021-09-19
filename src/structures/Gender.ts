import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon gender ratio entry' })
export class Gender {
  @Field(() => String, { description: 'The percentage for female occurrences' })
  public female!: string;

  @Field(() => String, { description: 'The percentage of male occurrences' })
  public male!: string;
}

import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A flavor text entry for a Pokémon' })
export class Flavor {
  @Field(() => String, { description: 'The flavor text for this entry' })
  public flavor!: string;

  @Field(() => String, { description: 'The name of the game this flavor text is from' })
  public game!: string;
}

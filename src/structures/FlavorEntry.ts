import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A flavor text entry for a Pokémon' })
export default class FlavorEntry {
  @Field(() => String, { description: 'The name of the game this flavor text is from' })
  public game!: string;

  @Field(() => String, { description: 'The flavor text for this entry' })
  public flavor!: string;
}

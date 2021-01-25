import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: "A Pokémon's abilities entry" })
export default class AbilitiesEntry {
  @Field(() => String, { description: 'The first ability of a Pokémon' })
  public first!: string;

  @Field(() => String, { nullable: true, description: 'The second ability of a Pokémon' })
  public second?: string;

  @Field(() => String, { nullable: true, description: 'The hidden ability of a Pokémon' })
  public hidden?: string;

  @Field(() => String, { nullable: true, description: 'The special ability of a Pokémon' })
  public special?: string;
}

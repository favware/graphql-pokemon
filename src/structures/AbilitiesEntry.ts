import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon\'s abilities entry' })
export default class AbilitiesEntry {
  @Field(() => String, { description: 'The first ability of a Pokémon' })
  first: string;

  @Field(() => String, { nullable: true, description: 'The second ability of a Pokémon' })
  second?: string;

  @Field(() => String, { nullable: true, description: 'The hidden ability of a Pokémon' })
  hidden?: string;

  @Field(() => String, { nullable: true, description: 'The special ability of a Pokémon' })
  special?: string;
}
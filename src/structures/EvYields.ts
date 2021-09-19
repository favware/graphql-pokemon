import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: "A Pokémon's EV yields" })
export class EvYields {
  @Field(() => Int, { description: 'The attack EV yield of a Pokémon' })
  public attack!: number;

  @Field(() => Int, { description: 'The defense EV yield of a Pokémon' })
  public defense!: number;

  @Field(() => Int, { description: 'The HP EV yield of a pokémon' })
  public hp!: number;

  @Field(() => Int, { description: 'The special attack EV yield of a Pokémon' })
  public specialattack!: number;

  @Field(() => Int, { description: 'The special defense EV yield of a Pokémon' })
  public specialdefense!: number;

  @Field(() => Int, { description: 'The speed EV yield of a Pokémon' })
  public speed!: number;
}

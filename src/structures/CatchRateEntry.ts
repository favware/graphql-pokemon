import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon catch rate entry' })
export class CatchRateEntry {
  @Field(() => Int, { description: 'The base catch rate for a Pokémon that will be used to calculate the final catch rate' })
  public base!: number;

  @Field(() => String, {
    description: 'The chance to capture a Pokémon when an ordinary Poké Ball is thrown at full health without any status condition'
  })
  public percentageWithOrdinaryPokeballAtFullHealth!: string;
}

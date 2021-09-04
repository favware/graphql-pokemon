import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon catch rate entry' })
export default class CatchRateEntry {
  @Field(() => Int, { description: '' })
  public base!: number;

  @Field(() => String, { description: '' })
  public percentageWithOrdinaryPokeballAtFullHealth!: string;
}

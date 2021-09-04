import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A Pokémon catch rate entry' })
export default class CatchRateEntry {
  @Field(() => String, { description: '' })
  public base!: string;

  @Field(() => String, { description: '' })
  public percentageWithOrdinaryPokeballAtFullHealth!: string;
}

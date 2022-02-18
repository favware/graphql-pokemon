import { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';
import { IsNumber, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class PokemonListArgs extends BaseFuzzyArgs {
  @Field(() => Int, {
    nullable: true,
    defaultValue: 1271,
    description: 'Return only this many results, starting from the offset'
  })
  @IsNumber()
  @Min(1)
  @Max(1271)
  public take = 1271;
}

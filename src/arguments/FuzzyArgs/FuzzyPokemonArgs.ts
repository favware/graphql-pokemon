import { ArgsType, Field } from 'type-graphql';
import { IsString } from 'class-validator';
import { BaseFuzzyArgs } from '#arguments/FuzzyArgs/Base';
import { BasePokemonArgs } from '#arguments/PokemonArgs/Base';
import { Mixin } from 'ts-mixer';

@ArgsType()
export class FuzzyPokemonArgs extends Mixin(BaseFuzzyArgs, BasePokemonArgs) {
  @Field(() => String, { description: 'The Pokémon to fuzzily search' })
  @IsString()
  public pokemon!: string;
}

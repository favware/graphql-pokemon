import { IsBoolean, IsNumber, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export abstract class BasePokemonArgs {
  @Field(() => Int, {
    nullable: true,
    defaultValue: 0,
    description: 'Sets the offset from where to start.'
  })
  @IsNumber()
  @Min(0)
  public offsetFlavorTexts = 0;

  @Field(() => Int, {
    nullable: true,
    defaultValue: 1,
    description: 'Return this many flavour texts, up to the maximum of entries that the requested Pokémon has.'
  })
  @IsNumber()
  @Min(1)
  @Max(50)
  public takeFlavorTexts = 1;

  @Field(() => Boolean, {
    nullable: true,
    defaultValue: true,
    description: [
      'Whether to reverse the list of games from which to get the data.',
      'By default Generation 1 is considered for "take" first, when setting this to true that is instead Generation 8.'
    ].join(' ')
  })
  @IsBoolean()
  public reverseFlavorTexts = true;
}

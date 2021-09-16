import { IsBoolean, IsNumber, Max, Min } from 'class-validator';
import { decorate } from 'ts-mixer';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export abstract class BasePokemonArgs {
  @decorate(
    Field(() => Int, {
      nullable: true,
      defaultValue: 0,
      description: 'Sets the offset from where to start.'
    })
  )
  @decorate(IsNumber())
  @decorate(Min(0))
  public offsetFlavorTexts = 0;

  @decorate(
    Field(() => Int, {
      nullable: true,
      defaultValue: 1,
      description: 'Return this many flavour texts, up to the maximum of entries that the requested Pokémon has.'
    })
  )
  @decorate(IsNumber())
  @decorate(Min(1))
  @decorate(Max(50))
  public takeFlavorTexts = 1;

  @decorate(
    Field(() => Boolean, {
      nullable: true,
      defaultValue: false,
      description: [
        'Whether to reverse the list of games from which to get the data.',
        'By default Generation 1 is considered for "take" first, when setting this to true that is instead Generation 8.'
      ].join(' ')
    })
  )
  @decorate(IsBoolean())
  public reverseFlavorTexts = false;
}

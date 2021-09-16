import { IsBoolean, IsNumber, Max, Min } from 'class-validator';
import { decorate } from 'ts-mixer';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export abstract class BaseFuzzyArgs {
  @decorate(Field(() => Int, { nullable: true, defaultValue: 0, description: 'Sets the offset where to start' }))
  @decorate(IsNumber())
  @decorate(Min(0))
  public offset = 0;

  @decorate(
    Field(() => Int, {
      nullable: true,
      defaultValue: 1,
      description: 'Return only this many results, starting from the offset'
    })
  )
  @decorate(IsNumber())
  @decorate(Min(1))
  @decorate(Max(50))
  public take = 1;

  @decorate(
    Field(() => Boolean, {
      nullable: true,
      defaultValue: false,
      description: 'Reverses the dataset before paginating'
    })
  )
  @decorate(IsBoolean())
  public reverse = false;
}

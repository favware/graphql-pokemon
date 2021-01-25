import { IsBoolean, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default abstract class PaginatedArgs {
  @Field(() => Int, { defaultValue: 0, description: 'Sets the offset where to start' })
  @Min(0)
  public skip!: number;

  @Field(() => Int, { defaultValue: 10, description: 'Return only this many results, starting from the offset' })
  @Min(1)
  @Max(50)
  public take!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false, description: 'Reverses the dataset before paginating' })
  @IsBoolean()
  public reverse?: boolean;
}

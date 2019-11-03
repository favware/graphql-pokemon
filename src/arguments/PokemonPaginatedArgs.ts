import {IsBoolean, Max, Min} from 'class-validator';
import {ArgsType, Field, Int} from 'type-graphql';

@ArgsType()
export default class PokemonPaginatedArgs {
  @Field(() => Int, {defaultValue: 0, description: 'Sets the offset where to start'})
  @Min(0)
  skip: number;

  @Field(() => Int, {description: 'Return only this many results from offset'})
  @Min(1)
  @Max(50)
  take = 10;

  @Field(() => Boolean, {description: 'Reverses the dataset before paginating'})
  @IsBoolean()
  reverse = false;

  @Field(() => String, { description: 'The pokemon to search for' })
  pokemon: string;
}
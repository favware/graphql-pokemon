import type PokemonTypes from '#utils/pokemon';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A type matchup entry' })
export class Type {
  @Field(() => [String], { description: 'The types with 4x effectiveness' })
  public doubleEffectiveTypes: (keyof PokemonTypes.Types)[] = [];

  @Field(() => [String], { description: 'The types with 0.25x effectiveness' })
  public doubleResistedTypes: (keyof PokemonTypes.Types)[] = [];

  @Field(() => [String], { description: 'The types with 2x effectiveness' })
  public effectiveTypes: (keyof PokemonTypes.Types)[] = [];

  @Field(() => [String], { description: 'The types with 0x effectiveness' })
  public effectlessTypes: (keyof PokemonTypes.Types)[] = [];

  @Field(() => [String], { description: 'The types with 1x effectiveness' })
  public normalTypes: (keyof PokemonTypes.Types)[] = [];

  @Field(() => [String], { description: 'The types with 0.5x effectiveness' })
  public resistedTypes: (keyof PokemonTypes.Types)[] = [];
}

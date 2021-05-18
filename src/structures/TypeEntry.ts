import type Pokemon from '#utils/pokemon';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A type matchup entry' })
export default class TypeEntry {
  @Field(() => [String], { description: 'The types with 4x effectiveness' })
  public doubleEffectiveTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 2x effectiveness' })
  public effectiveTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 1x effectiveness' })
  public normalTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0.5x effectiveness' })
  public resistedTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0.25x effectiveness' })
  public doubleResistedTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0x effectiveness' })
  public effectlessTypes!: (keyof Pokemon.Types)[];
}

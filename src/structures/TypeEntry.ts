import { ObjectType, Field } from 'type-graphql';
import Pokemon from '../utils/pokemon';

@ObjectType({ description: 'A type matchup entry' })
export default class TypeEntry {
  @Field(() => [String], { description: 'The types with 4x effectiveness' })
  doubleEffectiveTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 2x effectiveness' })
  effectiveTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 1x effectiveness' })
  normalTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0.5x effectiveness' })
  resistedTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0.25x effectiveness' })
  doubleResistedTypes!: (keyof Pokemon.Types)[];

  @Field(() => [String], { description: 'The types with 0x effectiveness' })
  effectlessTypes!: (keyof Pokemon.Types)[];
}

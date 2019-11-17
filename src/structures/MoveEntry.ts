import { Field, Int, ObjectType } from 'type-graphql';
import Pokemon from '../utils/pokemon';
import { MoveCategoryUnion } from './RegularExpression';

@ObjectType({ description: 'A single Pokémon move entry' })
export default class MoveEntry {
  @Field(() => String, { description: 'The name for a move' })
  name: string;

  @Field(() => String, { description: 'The short description for a move' })
  shortDesc: string;

  @Field(() => String, { description: 'The type for a move' })
  type: string;

  @Field(() => String, { description: 'The base power for a move' })
  basePower: string;

  @Field(() => Int, { description: 'The power points for a move' })
  pp: number;

  @Field(() => MoveCategoryUnion, { description: 'The category for a move' })
  category: Pokemon.MoveCategoriesUnion;

  @Field(() => Int, { description: 'The accuracy for a move' })
  accuracy: number;

  @Field(() => Int, { description: 'The priority for a move' })
  priority: number;

  @Field(() => String, { description: 'The target for a move' })
  target: string;

  @Field(() => String, { description: 'The contest type for a move' })
  contestType: string;

  @Field(() => String, { description: 'Bulbapedia page for a move' })
  bulbapediaPage: string;

  @Field(() => String, { description: 'Serebii page for a move' })
  serebiiPage: string;

  @Field(() => String, { description: 'Smogon page for a move' })
  smogonPage: string;

  @Field(() => String, {
    nullable: true,
    description: 'Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it',
  })
  isZ?: string;

  @Field(() => String, { nullable: true, description: 'The long description for a move' })
  desc?: string;
}
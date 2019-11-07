import {Field, Int, ObjectType} from 'type-graphql';

@ObjectType({description: 'A Pokémon\'s stats'})
export default class StatsEntry {
  @Field(() => Int, {description: 'The base HP stat of a pokemon'})
  hp: number;

  @Field(() => Int, {description: 'The base attack stat of a pokemon'})
  attack: number;

  @Field(() => Int, {description: 'The base defense stat of a pokemon'})
  defense: number;

  @Field(() => Int, {description: 'The base special attack stat of a pokemon'})
  specialattack: number;

  @Field(() => Int, {description: 'The base special defense stat of a pokemon'})
  specialdefense: number;

  @Field(() => Int, {description: 'The base speed stat of a pokemon'})
  speed: number;
}
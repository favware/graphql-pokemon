import {Field, ObjectType} from 'type-graphql';
import Pokemon from '../typings/pokemon';
import DexEntry from './DexEntry';
import {GraphQLJSONObject} from 'graphql-type-json';

@ObjectType({description: 'A Pokemon\'s details entry'})
export default class DetailsEntry extends DexEntry {
  @Field(() => GraphQLJSONObject, {nullable: true, description: 'The evolutions for a pokemon, if any '})
  evolutions?: this[];

  @Field(() => GraphQLJSONObject, {nullable: true, description: 'The preevolutions for a pokemon, if any '})
  preevolutions?: this[];

  @Field(() => [ GraphQLJSONObject ], {description: 'The flavortexts for a pokemon'})
  flavorTexts: Pokemon.Flavor[];

  @Field(() => GraphQLJSONObject, {description: 'The gender ratio data for a pokemon, set to "none" for genderless pokemon '})
  genderData: Pokemon.GenderRatio | Pokemon.GendersUnion;

  @Field({description: 'The sprite for a pokemon'})
  sprite: string;

  @Field({description: 'The shiny sprite for a pokemon'})
  shinySprite: string;

  @Field({description: 'The smogon tier a pokemon falls under'})
  smogonTier: string | 'none';
}
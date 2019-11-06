import { Field, Int, ObjectType } from 'type-graphql';
import Pokemon from '../typings/pokemon';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType({ description: 'A single Pokedex entry' })
export default class DexEntry {
  @Field(() => Int, { description: 'The dex number for a pokemon' })
  num: number;

  @Field(() => String, { description: 'The species name for a pokemon' })
  species: string;

  @Field(() => [ String ], { description: 'The types for a pokemon' })
  types: string[];

  @Field(() => GraphQLJSONObject, { description: 'The abilities for a pokemon' })
  abilities: Pokemon.Abilities;

  @Field(() => GraphQLJSONObject, { description: 'Base stats for a pokemon' })
  baseStats: Pokemon.Stats;

  @Field(() => String, { description: 'The colour of a pokemon as listed in the Pokedex' })
  color: string;

  @Field(() => [ String ], { nullable: true, description: 'The egg groups a pokemon is in' })
  eggGroups?: string[];

  @Field(() => String || Int, { nullable: true, description: 'The evolution level, or special method, for a pokemon' })
  evolutionLevel?: string | number;

  @Field(() => [ String ], { nullable: true, description: 'The raw evos of a pokemon ' })
  evos?: string[];

  @Field(() => String, { nullable: true, description: 'The raw prevo of a pokemon ' })
  prevo?: string;

  @Field(() => String, { nullable: true, description: 'The form identifier of a pokemon ' })
  forme?: string;

  @Field(() => String, { nullable: true, description: 'The single letter identifier of the form' })
  formeLetter?: string;

  @Field(() => String, { nullable: true, description: 'The gender of a pokemon, if it can only have 1 gender ' })
  gender?: 'M' | 'F' | 'N';

  @Field(() => GraphQLJSONObject, {
    nullable: true,
    description: 'The gender ratio of a pokemon, if it can be multiple genders',
  })
  genderRatio?: Pokemon.GenderRatio;

  @Field(() => Int, { description: 'The height of a pokemon in meters' })
  height: number;

  @Field(() => Int, { description: 'The weight of a pokemon in kilograms' })
  weight: number;

  @Field(() => String, { nullable: true, description: 'Base form if this entry describes an alternate form' })
  baseForme?: string;

  @Field(() => String, { nullable: true, description: 'Base species if this entry describes a special form' })
  baseSpecies?: string;

  @Field(() => [ String ], { nullable: true, description: 'Any other forms for a pokemon' })
  otherFormes?: string[];
}
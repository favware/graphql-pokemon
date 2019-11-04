import {Field, Int, ObjectType} from 'type-graphql';

@ObjectType({description: 'A single Pokemon ability entry'})
export default class AbilityEntry {
  @Field(() => String, {nullable: true, description: 'The long description for an ability'})
  desc?: string;

  @Field(() => String, {description: 'The short description for an ability'})
  shortDesc: string;

  @Field(() => String, {description: 'The name for an ability'})
  name: string;

  @Field(() => Int, {description: 'The index number for an ability'})
  num: number;

  @Field(() => String, {description: 'Bulbapedia page for an ability'})
  bulbapediaPage: string;

  @Field(() => String, { description: 'Serebii page for an ability'})
  serebiiPage: string;

  @Field(() => String, { description: 'Smogon page for an ability'})
  smogonPage: string;
}
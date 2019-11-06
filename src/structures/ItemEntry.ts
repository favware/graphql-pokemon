import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A single item entry' })
export default class ItemEntry {
  @Field(() => String, { description: 'The long description for an item' })
  desc: string;

  @Field(() => String, { nullable: true, description: 'The long description for an item' })
  shortDesc?: string;

  @Field(() => String, { description: 'The name for an item' })
  name: string;

  @Field(() => Int, { description: 'The index number for an item' })
  num: number;

  @Field(() => String, { description: 'Bulbapedia page for an item' })
  bulbapediaPage: string;

  @Field(() => String, { description: 'Serebii page for an item' })
  serebiiPage: string;

  @Field(() => String, { description: 'Smogon page for an item' })
  smogonPage: string;
}
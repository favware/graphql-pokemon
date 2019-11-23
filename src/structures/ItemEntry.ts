import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType({ description: 'A single item entry' })
export default class ItemEntry {
  @Field(() => String, { description: 'The long description for an item' })
  desc: string;

  @Field(() => String, { nullable: true, description: 'The long description for an item' })
  shortDesc?: string;

  @Field(() => String, { description: 'The name for an item' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Whether an item is non-standard, and if it is why' })
  isNonstandard?: string;

  @Field(() => String, { description: 'The sprite for an item' })
  sprite: string;

  @Field(() => Int, { description: 'The generation in which this item was introduced' })
  generationIntroduced: number;

  @Field(() => String, { description: 'Bulbapedia page for an item' })
  bulbapediaPage: string;

  @Field(() => String, { description: 'Serebii page for an item' })
  serebiiPage: string;

  @Field(() => String, { description: 'Smogon page for an item' })
  smogonPage: string;
}
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A single item entry' })
export default class ItemEntry {
  @Field(() => String, { description: 'The long description for an item' })
  public desc!: string;

  @Field(() => String, { nullable: true, description: 'The long description for an item' })
  public shortDesc?: string;

  @Field(() => String, { description: 'The name for an item' })
  public name!: string;

  @Field(() => String, { nullable: true, description: 'Whether an item is non-standard, and if it is why' })
  public isNonstandard?: string;

  @Field(() => String, { description: 'The sprite for an item' })
  public sprite!: string;

  @Field(() => Int, { description: 'The generation in which this item was introduced' })
  public generationIntroduced!: number;

  @Field(() => String, { description: 'Bulbapedia page for an item' })
  public bulbapediaPage!: string;

  @Field(() => String, { description: 'Serebii page for an item' })
  public serebiiPage!: string;

  @Field(() => String, { nullable: true, description: 'Smogon page for an item' })
  public smogonPage?: string;
}

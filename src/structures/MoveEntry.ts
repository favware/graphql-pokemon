import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A single Pokémon move entry' })
export default class MoveEntry {
  @Field(() => String, { description: 'The name for a move' })
  public name!: string;

  @Field(() => String, { description: 'The short description for a move' })
  public shortDesc!: string;

  @Field(() => String, { description: 'The type for a move' })
  public type!: string;

  @Field(() => String, { description: 'The base power for a move' })
  public basePower!: string;

  @Field(() => Int, {
    nullable: true,
    description: 'The power this move will have when used with its Z-move equivalent'
  })
  public zMovePower!: number;

  @Field(() => Int, {
    nullable: true,
    description: 'The power this move will have when used with its Max Move equivalent'
  })
  public maxMovePower!: number;

  @Field(() => Int, { description: 'The power points for a move' })
  public pp!: number;

  @Field(() => String, { description: 'The category for a move' })
  public category!: string;

  @Field(() => Int, { description: 'The accuracy for a move' })
  public accuracy!: number;

  @Field(() => Int, { description: 'The priority for a move' })
  public priority!: number;

  @Field(() => String, { description: 'The target for a move' })
  public target!: string;

  @Field(() => String, { nullable: true, description: 'The contest type for a move' })
  public contestType?: string;

  @Field(() => String, { description: 'Bulbapedia page for a move' })
  public bulbapediaPage!: string;

  @Field(() => String, { description: 'Serebii page for a move' })
  public serebiiPage!: string;

  @Field(() => String, { description: 'Smogon page for a move' })
  public smogonPage!: string;

  @Field(() => String, { nullable: true, description: 'Whether a move is non-standard, and if it is why' })
  public isNonstandard?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Whether this move is a Z-Move, and if it is the Z-Crystal required to trigger it'
  })
  public isZ?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Whether this move is a G-MAX move, and if it is which Gigantamaxed Pokémon can use it'
  })
  public isGMax?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Whether this move can be used outside of battle, and if it can what the effect of the field move is'
  })
  public isFieldMove?: string;

  @Field(() => String, { nullable: true, description: 'The long description for a move' })
  public desc?: string;
}

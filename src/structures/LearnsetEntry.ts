import type Pokemon from '#utils/pokemon';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A learnset move entry' })
export class LearnsetMove implements Pokemon.LearnsetMove {
  @Field(() => String, { nullable: true, description: 'The name of the move', defaultValue: null })
  public name!: string | null;

  @Field(() => Int, {
    nullable: true,
    description: 'The generation in which this pokemon learned the move this way',
    defaultValue: null
  })
  public generation!: number | null;
}

@ObjectType({ description: 'A learnset level up move entry' })
export class LearnsetLevelUpMove extends LearnsetMove implements Pokemon.LearnsetLevelupMove {
  @Field(() => Int, { nullable: true, description: 'The level at which the move is learned', defaultValue: null })
  public level!: number | null;
}

@ObjectType({ description: 'A learnset entry' })
export default class LearnsetEntry {
  @Field(() => [LearnsetLevelUpMove], {
    description: 'The moves that can be learned through levelling up',
    defaultValue: [new LearnsetLevelUpMove()]
  })
  public levelUpMoves!: LearnsetLevelUpMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that can be learned through virtual console transfer',
    defaultValue: [new LearnsetMove()]
  })
  public virtualTransferMoves!: LearnsetMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that can be learned from a move tutor',
    defaultValue: [new LearnsetMove()]
  })
  public tutorMoves!: LearnsetMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that can be learned from a Technical Machine or Technical Record',
    defaultValue: [new LearnsetMove()]
  })
  public tmMoves!: LearnsetMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that can be passed as egg moves',
    defaultValue: [new LearnsetMove()]
  })
  public eggMoves!: LearnsetMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that are exclusive to event variants of the Pokémon',
    defaultValue: [new LearnsetMove()]
  })
  public eventMoves!: LearnsetMove[];

  @Field(() => [LearnsetMove], {
    description: 'The moves that are exclusively learned in the Unova Dream World',
    defaultValue: [new LearnsetMove()]
  })
  public dreamworldMoves!: LearnsetMove[];

  @Field(() => Int, { description: 'The dex number for a Pokémon' })
  public num!: number;

  @Field(() => String, { description: 'The species name for a Pokémon' })
  public species!: string;

  @Field({
    description: 'The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public sprite!: string;

  @Field({
    description: 'The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public shinySprite!: string;

  @Field({
    description: 'The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public backSprite!: string;

  @Field({
    description:
      'The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public shinyBackSprite!: string;

  @Field(() => String, { description: 'The PokéDex colour for the Pokémon' })
  public color!: string;
}

import { Field, Int, ObjectType } from 'type-graphql';
import Pokemon from '../utils/pokemon';

@ObjectType({ description: 'A learnset move entry' })
export class LearnsetMove implements Pokemon.LearnsetMove {
  @Field(() => String, { nullable: true, description: 'The name of the move', defaultValue: null })
  name: string | null;

  @Field(() => Int, {
    nullable: true,
    description: 'The generation in which this pokemon learned the move this way',
    defaultValue: null,
  })
  generation: number | null;
}

@ObjectType({ description: 'A learnset level up move entry' })
export class LearnsetLevelUpMove extends LearnsetMove implements Pokemon.LearnsetLevelupMove {
  @Field(() => Int, { nullable: true, description: 'The level at which the move is learned', defaultValue: null })
  level: number | null;
}

@ObjectType({ description: 'A learnset entry' })
export default class LearnsetEntry {
  @Field(() => [ LearnsetLevelUpMove ], {
    description: 'The moves that can be learned through levelling up',
    defaultValue: [ new LearnsetLevelUpMove() ],
  })
  levelUpMoves: LearnsetLevelUpMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that can be learned through virtual console transfer',
    defaultValue: [ new LearnsetMove() ],
  })
  virtualTransferMoves: LearnsetMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that can be learned from a move tutor',
    defaultValue: [ new LearnsetMove() ],
  })
  tutorMoves: LearnsetMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that can be learned from a Technical Machine or Technical Record',
    defaultValue: [ new LearnsetMove() ],
  })
  tmMoves: LearnsetMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that can be passed as egg moves',
    defaultValue: [ new LearnsetMove() ],
  })
  eggMoves: LearnsetMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that are exclusive to event variants of the Pokémon',
    defaultValue: [ new LearnsetMove() ],
  })
  eventMoves: LearnsetMove[];

  @Field(() => [ LearnsetMove ], {
    description: 'The moves that are exclusively learned in the Unova Dream World',
    defaultValue: [ new LearnsetMove() ],
  })
  dreamworldMoves: LearnsetMove[];

  @Field(() => String, {
    nullable: true,
    description: 'The sprite for the Pokémon, shortcut to the sprite in DexDetails for creating beautiful displays of learnset data',
  })
  sprite: string;

  @Field(() => String, {
    nullable: true,
    description: 'The shiny sprite for the Pokémon, shortcut to the sprite in DexDetails for creating beautiful displays of learnset data',
  })
  shinySprite: string;

  @Field(() => String, {
    nullable: true,
    description: 'The PokéDex colour for the Pokémon, shortcut to the colour in DexDetails for creating beautiful displays of the learnset data',
  })
  color: string;
}
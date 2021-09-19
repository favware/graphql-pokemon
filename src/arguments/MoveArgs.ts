import { ArgsType, Field } from 'type-graphql';
import { moves } from '#utils/enums';
import { IsString } from 'class-validator';

@ArgsType()
export class MoveArgs {
  @Field(() => moves, { description: 'The move to look up' })
  @IsString()
  public move!: string;
}

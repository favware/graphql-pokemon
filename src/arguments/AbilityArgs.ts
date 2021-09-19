import { ArgsType, Field } from 'type-graphql';
import { abilities } from '#utils/enums';
import { IsString } from 'class-validator';

@ArgsType()
export class AbilityArgs {
  @Field(() => abilities, { description: 'The ability to look up' })
  @IsString()
  public ability!: string;
}

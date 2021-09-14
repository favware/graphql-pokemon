import { Type } from '#structures/Type';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The type matchups for any one or two given types' })
export class TypeMatchup {
  @Field(() => Type, { description: 'The type matchups when attacking' })
  public attacking!: Type;

  @Field(() => Type, { description: 'The type matchups when defending' })
  public defending!: Type;
}

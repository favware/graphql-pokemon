import TypeEntry from '#structures/TypeEntry';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'The type matchups for any one or two given types' })
export default class TypeMatchups {
  @Field(() => TypeEntry, { description: 'The type matchups when attacking' })
  public attacking!: TypeEntry;

  @Field(() => TypeEntry, { description: 'The type matchups when defending' })
  public defending!: TypeEntry;
}

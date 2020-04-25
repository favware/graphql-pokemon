import { Field, ObjectType } from 'type-graphql';
import TypeEntry from './TypeEntry';

@ObjectType({ description: 'The type matchups for any one or two given types' })
export default class TypeMatchups {
  @Field(() => TypeEntry, { description: 'The type matchups when attacking' })
  attacking!: TypeEntry;

  @Field(() => TypeEntry, { description: 'The type matchups when defending' })
  defending!: TypeEntry;
}

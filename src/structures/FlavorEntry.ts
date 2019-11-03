import {Field, ObjectType} from 'type-graphql';

@ObjectType({description: 'A flavor text entry for a pokemon'})
export default class FlavorEntry {
  @Field(() => String, {description: 'The name of the game this flavor text is from'})
  game: string;

  @Field(() => String, {description: 'The flavor text for this entry'})
  flavor: string;
}
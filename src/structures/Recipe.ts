import {ObjectType, Field, ID} from 'type-graphql';

@ObjectType()
export class Recipe {
  @Field(_type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field(_type => [ String ])
  ingredients: string[];
}
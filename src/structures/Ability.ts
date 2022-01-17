import { abilities } from '#utils/enums';
import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A single Pokémon ability entry' })
export class Ability {
  @Field(() => abilities, { description: 'The key of the ability as stored in the API' })
  public key!: string;

  @Field(() => String, { description: 'Bulbapedia page for an ability' })
  public bulbapediaPage!: string;

  @Field(() => String, { nullable: true, description: 'The long description for an ability' })
  public desc?: string;

  @Field(() => String, {
    nullable: true,
    description: 'Whether this ability has effects outside of battle, and if so what the effect is'
  })
  public isFieldAbility?: string;

  @Field(() => String, { description: 'The name for an ability' })
  public name!: string;

  @Field(() => String, { description: 'Serebii page for an ability' })
  public serebiiPage!: string;

  @Field(() => String, { description: 'The short description for an ability' })
  public shortDesc!: string;

  @Field(() => String, { description: 'Smogon page for an ability' })
  public smogonPage!: string;
}

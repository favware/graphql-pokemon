import { Field, Int, ObjectType } from 'type-graphql';
import DexEntry from './DexEntry';
import FlavorEntry from './FlavorEntry';

@ObjectType({ description: "A Pokémon's details entry" })
export default class DexDetails extends DexEntry {
  @Field(() => Int, { description: 'The total of all base stats for a Pokémon' })
  public baseStatsTotal!: number;

  @Field(() => [DexDetails], { nullable: true, description: 'The evolutions for a Pokémon, if any ' })
  public evolutions?: this[];

  @Field(() => [DexDetails], { nullable: true, description: 'The preevolutions for a Pokémon, if any ' })
  public preevolutions?: this[];

  @Field(() => [FlavorEntry], { description: 'The flavortexts for a Pokémon' })
  public flavorTexts!: FlavorEntry[];

  @Field({
    description: 'The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public sprite!: string;

  @Field({
    description: 'The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public shinySprite!: string;

  @Field({ description: 'The smogon tier a Pokémon falls under' })
  public smogonTier!: string | 'none';

  @Field(() => String, { description: 'Bulbapedia page for a Pokémon' })
  public bulbapediaPage!: string;

  @Field(() => String, { description: 'Serebii page for a Pokémon' })
  public serebiiPage!: string;

  @Field(() => String, { description: 'Smogon page for a Pokémon' })
  public smogonPage!: string;
}

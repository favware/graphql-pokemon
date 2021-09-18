import { Abilities } from '#structures/Abilities';
import { CatchRate } from '#structures/CatchRate';
import { EvYields } from '#structures/EvYields';
import { Flavor } from '#structures/Flavor';
import { Gender } from '#structures/Gender';
import { Stats } from '#structures/Stats';
import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: "A Pokémon's entry" })
export class Pokemon {
  @Field(() => Abilities, { description: 'The abilities for a Pokémon' })
  public abilities!: Abilities;

  @Field({
    description: 'The back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public backSprite!: string;

  @Field(() => String, { nullable: true, description: 'Base form if this entry describes an alternate form' })
  public baseForme?: string;

  @Field(() => String, { nullable: true, description: 'Base species if this entry describes a special form' })
  public baseSpecies?: string;

  @Field(() => Stats, { description: 'Base stats for a Pokémon' })
  public baseStats!: Stats;

  @Field(() => Int, { description: 'The total of all base stats for a Pokémon' })
  public baseStatsTotal!: number;

  @Field(() => String, { description: 'Bulbapedia page for a Pokémon' })
  public bulbapediaPage!: string;

  @Field(() => CatchRate, { nullable: true, description: 'The catch rate data for a Pokémon' })
  public catchRate?: CatchRate;

  @Field(() => String, { description: 'The colour of a Pokémon as listed in the Pokedex' })
  public color!: string;

  @Field(() => [String], {
    nullable: true,
    description: [
      'Any other *cosmetic* forms for a Pokémon,',
      'distinguished from other formes as cosmetic formes only change the look of the Pokémon,',
      'while other formes might also change an ability, moveset or other data.'
    ].join(' ')
  })
  public cosmeticFormes?: string[];

  @Field(() => [String], { nullable: true, description: 'The egg groups a Pokémon is in' })
  public eggGroups?: string[];

  @Field(() => String, { nullable: true, description: 'The evolution level, or special method, for a Pokémon' })
  public evolutionLevel?: string;

  @Field(() => [Pokemon], { nullable: true, description: 'The evolutions for a Pokémon, if any' })
  public evolutions?: this[];

  @Field(() => EvYields, { description: 'EV yields for a Pokémon' })
  public evYields!: EvYields;

  @Field(() => [Flavor], { description: 'The flavor texts for a Pokémon' })
  public flavorTexts!: Flavor[];

  @Field(() => String, { nullable: true, description: 'The form identifier of a Pokémon' })
  public forme?: string;

  @Field(() => String, { nullable: true, description: 'The single letter identifier of the form' })
  public formeLetter?: string;

  @Field(() => Gender, { description: 'The gender data for a Pokémon' })
  public gender!: Gender;

  @Field(() => Float, { description: 'The height of a Pokémon in meters' })
  public height!: number;

  @Field(() => Boolean, { description: 'Whether the egg of a Pokémon is obtainable' })
  public isEggObtainable!: boolean;

  @Field(() => String, { nullable: true, description: 'The levelling rate of a Pokémon' })
  public levellingRate?: string;

  @Field(() => Int, { nullable: true, description: 'The maximum number of steps required for the egg of a Pokémon to hatch' })
  public maximumHatchTime?: number;

  @Field(() => Int, { nullable: true, description: 'The minimum number of steps required for the egg of a Pokémon to hatch' })
  public minimumHatchTime?: number;

  @Field(() => Int, { description: 'The dex number for a Pokémon' })
  public num!: number;

  @Field(() => [String], { nullable: true, description: 'Any other forms for a Pokémon' })
  public otherFormes?: string[];

  @Field(() => [Pokemon], { nullable: true, description: 'The preevolutions for a Pokémon, if any' })
  public preevolutions?: this[];

  @Field(() => String, { description: 'Serebii page for a Pokémon' })
  public serebiiPage!: string;

  @Field({
    description:
      'The shiny back sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public shinyBackSprite!: string;

  @Field({
    description: 'The shiny sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public shinySprite!: string;

  @Field(() => String, { description: 'Smogon page for a Pokémon' })
  public smogonPage!: string;

  @Field({ description: 'The smogon tier a Pokémon falls under' })
  public smogonTier!: string | 'none';

  @Field(() => String, { description: 'The species name for a Pokémon' })
  public species!: string;

  @Field({
    description: 'The sprite for a Pokémon. For most Pokémon this will be the animated gif, with some exceptions that were older-gen exclusive'
  })
  public sprite!: string;

  @Field(() => [String], { description: 'The types for a Pokémon' })
  public types!: string[];

  @Field(() => Float, { description: 'The weight of a Pokémon in kilograms' })
  public weight!: number;
}

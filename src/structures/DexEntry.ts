import AbilitiesEntry from '#structures/AbilitiesEntry';
import GenderEntry from '#structures/GenderEntry';
import StatsEntry from '#structures/StatsEntry';
import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'A single Pokedex entry' })
export default class DexEntry {
  @Field(() => Int, { description: 'The dex number for a Pokémon' })
  public num!: number;

  @Field(() => String, { description: 'The species name for a Pokémon' })
  public species!: string;

  @Field(() => [String], { description: 'The types for a Pokémon' })
  public types!: string[];

  @Field(() => AbilitiesEntry, { description: 'The abilities for a Pokémon' })
  public abilities!: AbilitiesEntry;

  @Field(() => StatsEntry, { description: 'Base stats for a Pokémon' })
  public baseStats!: StatsEntry;

  @Field(() => String, { description: 'The colour of a Pokémon as listed in the Pokedex' })
  public color!: string;

  @Field(() => [String], { nullable: true, description: 'The egg groups a Pokémon is in' })
  public eggGroups?: string[];

  @Field(() => String || Int, { nullable: true, description: 'The evolution level, or special method, for a Pokémon' })
  public evolutionLevel?: string | number;

  @Field(() => [String], { nullable: true, description: 'The raw evos of a Pokémon ' })
  public evos?: string[];

  @Field(() => String, { nullable: true, description: 'The raw prevo of a Pokémon ' })
  public prevo?: string;

  @Field(() => String, { nullable: true, description: 'The form identifier of a Pokémon ' })
  public forme?: string;

  @Field(() => String, { nullable: true, description: 'The single letter identifier of the form' })
  public formeLetter?: string;

  @Field(() => GenderEntry, { description: 'The gender data for a Pokémon ' })
  public gender!: GenderEntry;

  @Field(() => Float, { description: 'The height of a Pokémon in meters' })
  public height!: number;

  @Field(() => Float, { description: 'The weight of a Pokémon in kilograms' })
  public weight!: number;

  @Field(() => String, { nullable: true, description: 'Base form if this entry describes an alternate form' })
  public baseForme?: string;

  @Field(() => String, { nullable: true, description: 'Base species if this entry describes a special form' })
  public baseSpecies?: string;

  @Field(() => [String], { nullable: true, description: 'Any other forms for a Pokémon' })
  public otherFormes?: string[];

  @Field(() => [String], {
    nullable: true,
    description: [
      'Any other *cosmetic* forms for a Pokémon,',
      'distinguished from other formes as cosmetic formes only change the look of the Pokémon,',
      'while other formes might also change an ability, moveset or other data.'
    ].join(' ')
  })
  public cosmeticFormes?: string[];
}

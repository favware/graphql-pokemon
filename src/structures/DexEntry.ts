import { Field, Int, ObjectType, Float } from 'type-graphql';
import AbilitiesEntry from './AbilitiesEntry';
import StatsEntry from './StatsEntry';
import GenderEntry from './GenderEntry';

@ObjectType({ description: 'A single Pokedex entry' })
export default class DexEntry {
  @Field(() => Int, { description: 'The dex number for a Pokémon' })
  num: number;

  @Field(() => String, { description: 'The species name for a Pokémon' })
  species: string;

  @Field(() => [ String ], { description: 'The types for a Pokémon' })
  types: string[];

  @Field(() => AbilitiesEntry, { description: 'The abilities for a Pokémon' })
  abilities: AbilitiesEntry;

  @Field(() => StatsEntry, { description: 'Base stats for a Pokémon' })
  baseStats: StatsEntry;

  @Field(() => String, { description: 'The colour of a Pokémon as listed in the Pokedex' })
  color: string;

  @Field(() => [ String ], { nullable: true, description: 'The egg groups a Pokémon is in' })
  eggGroups?: string[];

  @Field(() => String || Int, { nullable: true, description: 'The evolution level, or special method, for a Pokémon' })
  evolutionLevel?: string | number;

  @Field(() => [ String ], { nullable: true, description: 'The raw evos of a Pokémon ' })
  evos?: string[];

  @Field(() => String, { nullable: true, description: 'The raw prevo of a Pokémon ' })
  prevo?: string;

  @Field(() => String, { nullable: true, description: 'The form identifier of a Pokémon ' })
  forme?: string;

  @Field(() => String, { nullable: true, description: 'The single letter identifier of the form' })
  formeLetter?: string;

  @Field(() => GenderEntry, { description: 'The gender data for a Pokémon ' })
  gender: GenderEntry;

  @Field(() => Float, { description: 'The height of a Pokémon in meters' })
  height: number;

  @Field(() => Float, { description: 'The weight of a Pokémon in kilograms' })
  weight: number;

  @Field(() => String, { nullable: true, description: 'Base form if this entry describes an alternate form' })
  baseForme?: string;

  @Field(() => String, { nullable: true, description: 'Base species if this entry describes a special form' })
  baseSpecies?: string;

  @Field(() => [ String ], { nullable: true, description: 'Any other forms for a Pokémon' })
  otherFormes?: string[];
}
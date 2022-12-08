import type { PokemonTypes } from '#assets/pokemon-source';
import { Pokedex } from '#dexdata/pokedex';
import { TypesEnum } from '#utils/pokemonTypes';

const entries: [string, PokemonTypes.DexEntry][] = [
  [
    'sprigatito',
    {
      num: 906,
      species: 'sprigatito',
      types: [TypesEnum.Grass],
      genderRatio: { male: '87.5%', female: '12.5%' },
      baseStats: { hp: 40, atk: 61, def: 54, spa: 45, spd: 45, spe: 65 },
      abilities: { first: 'overgrow', hidden: 'protean' },
      heightm: 0.4,
      weightkg: 4.1,
      color: 'Green',
      evos: ['floragato'],
      eggGroups: ['Field', 'Grass'],
      evYields: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },
      isEggObtainable: true,
      catchRate: { base: 45, percentageWithOrdinaryPokeballAtFullHealth: '11.9%' },
      levellingRate: 'Medium Slow',
      minimumHatchTime: 5140
    }
  ]
];

for (const [key, value] of entries) {
  value.key = key;

  Pokedex.set(key, value);
}

import gql from 'graphql-tag';

export const getPokemonSpecies = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      species
    }
  }
`;

export const getPokemonSpeciesWithSprites = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      species
      sprite
      backSprite
      shinySprite
      shinyBackSprite
    }
  }
`;

export const getPokemonByNationalDexNumber = gql`
  query ($number: Int!) {
    getPokemonByDexNumber(number: $number) {
      species
    }
  }
`;

export const getPokemonWithFullData = gql`
  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      abilities {
        first {
          name
        }
        second {
          name
        }
        hidden {
          name
        }
        special {
          name
        }
      }
      eggGroups
      evYields {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
      evolutionLevel
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      backSprite
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      baseForme
      smogonTier
      species
      sprite
      types {
        name
      }
      baseSpecies
      baseStats {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
    }
  }
`;

export const getFuzzyPokemonSpecies = gql`
  query ($pokemon: String!, $take: Int, $reverse: Boolean) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take, reverse: $reverse) {
      species
    }
  }
`;

export const getAllPokemon = gql`
  query ($offset: Int, $take: Int) {
    getAllPokemon(offset: $offset, take: $take) {
      key
      species
    }
  }
`;

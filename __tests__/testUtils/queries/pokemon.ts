import { gql } from '#test-utils/testUtils';

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
        first
        second
        hidden
        special
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
      types
      types
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

export const getPokemonWithFullDataAndEvolutions = gql`
  fragment FullDataFragment on Pokemon {
    abilities {
      first
      second
      hidden
      special
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
    types
    types
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

  fragment FullDataWithEvolutions on Pokemon {
    evolutions {
      ...FullDataFragment
      evolutions {
        ...FullDataFragment
      }
      preevolutions {
        ...FullDataFragment
      }
    }
    preevolutions {
      ...FullDataFragment
      evolutions {
        ...FullDataFragment
      }
      preevolutions {
        ...FullDataFragment
      }
    }
    ...FullDataFragment
  }

  query ($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      ...FullDataWithEvolutions
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

export const getFuzzyPokemonWithFullData = gql`
  query ($pokemon: String!, $take: Int, $reverse: Boolean) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take, reverse: $reverse) {
      abilities {
        first
        second
        hidden
        special
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
      types
      types
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

export const getFuzzyPokemonWithFullDataAndEvolutions = gql`
  fragment FullDataFragment on Pokemon {
    abilities {
      first
      second
      hidden
      special
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
    types
    types
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

  fragment FullDataWithEvolutions on Pokemon {
    evolutions {
      ...FullDataFragment
    }
    preevolutions {
      ...FullDataFragment
    }
    ...FullDataFragment
  }

  query ($pokemon: String!, $take: Int, $reverse: Boolean, $takeFlavorTexts: Int, $reverseFlavorTexts: Boolean) {
    getFuzzyPokemon(pokemon: $pokemon, take: $take, reverse: $reverse, takeFlavorTexts: $takeFlavorTexts, reverseFlavorTexts: $reverseFlavorTexts) {
      ...FullDataWithEvolutions
    }
  }
`;

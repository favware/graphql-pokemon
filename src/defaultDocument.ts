export const defaultDocument = `
query GetPokemon(
  $pokemon: PokemonEnum!
  $offsetFlavorTexts: Int
  $takeFlavorTexts: Int
  $reverseFlavorTexts: Boolean
) {
  getPokemon(
    pokemon: $pokemon
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    ...FullData
  }
}

fragment GenerationalPokemonLearnsetFragment on GenerationalPokemonLearnset {
  generation3 {
    ...PokemonLearnsetFragment
  }
  generation4 {
    ...PokemonLearnsetFragment
  }
  generation5 {
    ...PokemonLearnsetFragment
  }
  generation6 {
    ...PokemonLearnsetFragment
  }
  generation7 {
    ...PokemonLearnsetFragment
  }
  generation8 {
    ...PokemonLearnsetFragment
  }
}

fragment PokemonLearnsetFragment on PokemonLearnset {
  dreamworldMoves {
    ...LearnsetMoveFragment
  }
  eggMoves {
    ...LearnsetMoveFragment
  }
  eventMoves {
    ...LearnsetMoveFragment
  }
  tmMoves {
    ...LearnsetMoveFragment
  }
  tutorMoves {
    ...LearnsetMoveFragment
  }
  virtualTransferMoves {
    ...LearnsetMoveFragment
  }
  levelUpMoves {
    ...LearnsetLevelUpMoveFragment
  }
}

fragment LearnsetLevelUpMoveFragment on LearnsetLevelUpMove {
  generation
  level
  move {
    ...MoveFragment
  }
}

fragment MoveFragment on Move {
  key
  accuracy
  basePower
  bulbapediaPage
  category
  contestType
  desc
  isFieldMove
  isGMax
  isNonstandard
  isZ
  maxMovePower
  name
  pp
  priority
  serebiiPage
  shortDesc
  smogonPage
  target
  type
  zMovePower
}

fragment LearnsetMoveFragment on LearnsetMove {
  generation
  move {
    ...MoveFragment
  }
}

fragment AbilitiesFragment on Abilities {
  first {
    ...AbilityFragment
  }
  second {
    ...AbilityFragment
  }
  hidden {
    ...AbilityFragment
  }
  special {
    ...AbilityFragment
  }
}

fragment AbilityFragment on Ability {
  name
  key
  bulbapediaPage
  desc
  isFieldAbility
  serebiiPage
  shortDesc
  smogonPage
  pokemonThatHaveThisAbility {
    ...FullDataFragmentWithoutNested
    learnsets {
      ...GenerationalPokemonLearnsetFragment
    }
  }
}

fragment EvYieldsFragment on EvYields {
  hp
  attack
  defense
  specialattack
  specialdefense
  speed
}

fragment FlavorFragment on Flavor {
  flavor
  game
}

fragment GenderFragment on Gender {
  female
  male
}

fragment PokemonTypeFragment on PokemonType {
  name
  matchup {
    attacking {
      doubleEffectiveTypes
      doubleResistedTypes
      effectiveTypes
      effectlessTypes
      normalTypes
      resistedTypes
    }
    defending {
      doubleEffectiveTypes
      doubleResistedTypes
      effectiveTypes
      effectlessTypes
      normalTypes
      resistedTypes
    }
  }
}

fragment StatsFragment on Stats {
  hp
  attack
  defense
  specialattack
  specialdefense
  speed
}

fragment CatchRateFragment on CatchRate {
  base
  percentageWithOrdinaryPokeballAtFullHealth
}

fragment FullDataFragmentWithoutNested on Pokemon {
  key
  eggGroups
  evYields {
    ...EvYieldsFragment
  }
  evolutionLevel
  flavorTexts {
    ...FlavorFragment
  }
  forme
  formeLetter
  gender {
    ...GenderFragment
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
    ...PokemonTypeFragment
  }
  baseSpecies
  baseStats {
    ...StatsFragment
  }
  baseStatsTotal
  bulbapediaPage
  catchRate {
    ...CatchRateFragment
  }
  color
  cosmeticFormes
  weight
}

fragment FullDataFragment on Pokemon {
  abilities {
    ...AbilitiesFragment
  }
  learnsets {
    ...GenerationalPokemonLearnsetFragment
  }
  ...FullDataFragmentWithoutNested
}

fragment FullData on Pokemon {
  ...FullDataFragment
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
}
`;

export const defaultVariables = JSON.parse(
  JSON.stringify({
    pokemon: 'dragonair',
    offsetFlavorTexts: 0,
    takeFlavorTexts: 1,
    reverseFlavorTexts: true
  })
);

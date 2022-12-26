import { createWriteStream } from 'node:fs';
import { pipeline as syncPipeline, Readable } from 'node:stream';
import { promisify } from 'node:util';

const pipeline = promisify(syncPipeline);

const outputFile = new URL('./output.json', import.meta.url);

const res = await fetch('http://localhost:4000', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
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

      query GetPokemon {
        getAllPokemon {
          ...FullData
        }
      }
    `
  })
});

const readable = Readable.from(res.body, { encoding: 'utf-8' });
const writable = createWriteStream(outputFile);
await pipeline(readable, writable);

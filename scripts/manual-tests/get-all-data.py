import requests
import json
import os

# The file that will be written to
filePath = './res.json'

# If the file already exists, delete it
if os.path.exists(filePath):
    os.remove(filePath)

# The query that will return all data from the API
query = '''
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
        isNonstandard
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

    query GetPokemon($offset: Int, $take: Int) {
        getAllPokemon(offset: $offset, take: $take) {
            ...FullData
        }
    }
'''

# Send the request
response = requests.post(
    'http://localhost:4000',
    json={'query': query, 'variables': {'offset': 0, 'take': 1423}},
    headers={'Content-Type': 'application/json'}
)

# The response body is a byte string, we need to decode it
body = response.content.decode('utf-8')

# Parse the JSON string into a Python dictionary
data = json.loads(body)

# Write the JSON string to a file
with open(filePath, 'w') as file:
    json.dump(data, file)

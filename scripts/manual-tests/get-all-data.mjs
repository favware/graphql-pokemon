import { createWriteStream } from 'node:fs';
import { pipeline as syncPipeline, Readable } from 'node:stream';
import { promisify } from 'node:util';

const pipeline = promisify(syncPipeline);

const query = `
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

      query GetPokemon($offset: Int, $take: Int) {
        getAllPokemon(offset: $offset, take: $take) {
          ...FullData
        }
      }
    `;

const headers = {
  'Content-Type': 'application/json'
};

const url = new URL('http://localhost:4000');

const resPokestar = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 0,
      take: 17
    }
  })
});

const resCap = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 17,
      take: 70
    }
  })
});

const resGen1Part1 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 87,
      take: 116
    }
  })
});

const resGen1Part2 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 203,
      take: 117
    }
  })
});

const resGen2 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 320,
      take: 113
    }
  })
});

const resGen3 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 433,
      take: 165
    }
  })
});

const resGen4 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 598,
      take: 142
    }
  })
});

const resGen5 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 740,
      take: 184
    }
  })
});

const resGen6 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 924,
      take: 92
    }
  })
});

const resGen7 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 1016,
      take: 129
    }
  })
});

const resGen8 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 1145,
      take: 133
    }
  })
});

const resGen9 = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    query,
    variables: {
      offset: 1278,
      take: 111
    }
  })
});

const readablePokestar = Readable.from(resPokestar.body, { encoding: 'utf-8' });
const readableCap = Readable.from(resCap.body, { encoding: 'utf-8' });
const readableGen1Part1 = Readable.from(resGen1Part1.body, { encoding: 'utf-8' });
const readableGen1Part2 = Readable.from(resGen1Part2.body, { encoding: 'utf-8' });
const readableGen2 = Readable.from(resGen2.body, { encoding: 'utf-8' });
const readableGen3 = Readable.from(resGen3.body, { encoding: 'utf-8' });
const readableGen4 = Readable.from(resGen4.body, { encoding: 'utf-8' });
const readableGen5 = Readable.from(resGen5.body, { encoding: 'utf-8' });
const readableGen6 = Readable.from(resGen6.body, { encoding: 'utf-8' });
const readableGen7 = Readable.from(resGen7.body, { encoding: 'utf-8' });
const readableGen8 = Readable.from(resGen8.body, { encoding: 'utf-8' });
const readableGen9 = Readable.from(resGen9.body, { encoding: 'utf-8' });

const writablePokestar = createWriteStream(new URL('./res-pokestar.json', import.meta.url));
const writableCap = createWriteStream(new URL('./res-cap.json', import.meta.url));
const writableGen1Part1 = createWriteStream(new URL('./res-gen1-part1.json', import.meta.url));
const writableGen1Part2 = createWriteStream(new URL('./res-gen1-part2.json', import.meta.url));
const writableGen2 = createWriteStream(new URL('./res-gen2.json', import.meta.url));
const writableGen3 = createWriteStream(new URL('./res-gen3.json', import.meta.url));
const writableGen4 = createWriteStream(new URL('./res-gen4.json', import.meta.url));
const writableGen5 = createWriteStream(new URL('./res-gen5.json', import.meta.url));
const writableGen6 = createWriteStream(new URL('./res-gen6.json', import.meta.url));
const writableGen7 = createWriteStream(new URL('./res-gen7.json', import.meta.url));
const writableGen8 = createWriteStream(new URL('./res-gen8.json', import.meta.url));
const writableGen9 = createWriteStream(new URL('./res-gen9.json', import.meta.url));

await pipeline(readablePokestar, writablePokestar);
await pipeline(readableCap, writableCap);
await pipeline(readableGen1Part1, writableGen1Part1);
await pipeline(readableGen1Part2, writableGen1Part2);
await pipeline(readableGen2, writableGen2);
await pipeline(readableGen3, writableGen3);
await pipeline(readableGen4, writableGen4);
await pipeline(readableGen5, writableGen5);
await pipeline(readableGen6, writableGen6);
await pipeline(readableGen7, writableGen7);
await pipeline(readableGen8, writableGen8);
await pipeline(readableGen9, writableGen9);

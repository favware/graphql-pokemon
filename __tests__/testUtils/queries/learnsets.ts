import { gql } from '#test-utils/testUtils';

export const getLearnset = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      species
      tmMoves {
        name
        generation
      }
      virtualTransferMoves {
        name
        generation
      }
      dreamworldMoves {
        name
        generation
      }
      eggMoves {
        name
        generation
      }
      eventMoves {
        name
        generation
      }
      levelUpMoves {
        name
        level
        generation
      }
      tutorMoves {
        name
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonSpecies = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      species
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonBacksprite = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      backSprite
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonSprite = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      sprite
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonColor = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      color
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonNum = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      num
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonShinyBackSprite = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      shinyBackSprite
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getLearnsetWithPokemonShinySprite = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      shinySprite
      levelUpMoves {
        name
        level
        generation
      }
    }
  }
`;

export const getFuzzyLearnset = gql`
  query ($pokemon: String!, $moves: [String!]!, $generation: Int) {
    getFuzzyLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      species
      backSprite
      sprite
      color
      num
      shinyBackSprite
      shinySprite
      tmMoves {
        name
        generation
      }
      virtualTransferMoves {
        name
        generation
      }
      dreamworldMoves {
        name
        generation
      }
      eggMoves {
        name
        generation
      }
      eventMoves {
        name
        generation
      }
      levelUpMoves {
        name
        level
        generation
      }
      tutorMoves {
        name
        generation
      }
    }
  }
`;

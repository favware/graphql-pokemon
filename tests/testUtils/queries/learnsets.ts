import gql from 'graphql-tag';

export const getLearnset = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
      species
      tmMoves {
        move {
          name
        }
        generation
      }
      virtualTransferMoves {
        move {
          name
        }
        generation
      }
      dreamworldMoves {
        move {
          name
        }
        generation
      }
      eggMoves {
        move {
          name
        }
        generation
      }
      eventMoves {
        move {
          name
        }
        generation
      }
      levelUpMoves {
        move {
          name
        }
        level
        generation
      }
      tutorMoves {
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
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
        move {
          name
        }
        generation
      }
      virtualTransferMoves {
        move {
          name
        }
        generation
      }
      dreamworldMoves {
        move {
          name
        }
        generation
      }
      eggMoves {
        move {
          name
        }
        generation
      }
      eventMoves {
        move {
          name
        }
        generation
      }
      levelUpMoves {
        move {
          name
        }
        level
        generation
      }
      tutorMoves {
        move {
          name
        }
        generation
      }
    }
  }
`;

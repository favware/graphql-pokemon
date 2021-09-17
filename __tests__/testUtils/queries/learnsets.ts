import { gql } from '#test-utils/testUtils';

export const getLearnset = gql`
  query ($pokemon: PokemonEnum!, $moves: [MovesEnum!]!, $generation: Int) {
    getLearnset(pokemon: $pokemon, moves: $moves, generation: $generation) {
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

export const getFuzzyLearnset = gql`
  query ($pokemon: String!, $moves: [String!]!, $generation: Int!) {
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

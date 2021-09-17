import { gql } from '#test-utils/testUtils';

export const getMoveName = gql`
  query ($move: MovesEnum!) {
    getMove(move: $move) {
      name
    }
  }
`;

export const getMoveWithFullData = gql`
  query ($move: MovesEnum!) {
    getMove(move: $move) {
      desc
      isFieldMove
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

export const getFuzzyMoveSpecies = gql`
  query ($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const getFuzzyMoveFullData = gql`
  query ($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      desc
      isFieldMove
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

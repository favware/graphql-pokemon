import gql from 'graphql-tag';

export const getMoveName = gql`
  query ($move: MovesEnum!) {
    getMove(move: $move) {
      name
    }
  }
`;

export const getMoveZPower = gql`
  query ($move: MovesEnum!) {
    getMove(move: $move) {
      zMovePower
    }
  }
`;

export const getMoveWithFullData = gql`
  query ($move: MovesEnum!) {
    getMove(move: $move) {
      accuracy
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
      basePower
      bulbapediaPage
      category
      contestType
      desc
      isFieldMove
      isGMax
      isNonstandard
      isZ
    }
  }
`;

export const getFuzzyMoveName = gql`
  query ($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const getFuzzyMoveWithFullData = gql`
  query ($move: String!, $take: Int, $reverse: Boolean) {
    getFuzzyMove(move: $move, take: $take, reverse: $reverse) {
      accuracy
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
      basePower
      bulbapediaPage
      category
      contestType
      desc
      isFieldMove
      isGMax
      isNonstandard
      isZ
    }
  }
`;

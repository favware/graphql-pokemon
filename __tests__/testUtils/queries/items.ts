import { gql } from '#test-utils/testUtils';

export const getItemName = gql`
  query ($item: ItemsEnum!) {
    getItem(item: $item) {
      name
    }
  }
`;

export const getItemWithFullData = gql`
  query ($item: ItemsEnum!) {
    getItem(item: $item) {
      bulbapediaPage
      desc
      generationIntroduced
      isNonstandard
      name
      serebiiPage
      shortDesc
      smogonPage
      sprite
    }
  }
`;

export const getFuzzyItemSpecies = gql`
  query ($item: String!, $take: Int, $reverse: Boolean) {
    getFuzzyItem(item: $item, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const getFuzzyItemFullData = gql`
  query ($item: String!, $take: Int, $reverse: Boolean) {
    getFuzzyItem(item: $item, take: $take, reverse: $reverse) {
      bulbapediaPage
      desc
      generationIntroduced
      isNonstandard
      name
      serebiiPage
      shortDesc
      smogonPage
      sprite
    }
  }
`;

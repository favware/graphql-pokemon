import { gql } from '#test-utils/testUtils';

export const getAbilityName = gql`
  query ($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      name
    }
  }
`;

export const getAbilityWithFullData = gql`
  query ($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      desc
      isFieldAbility
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

export const getFuzzyAbilitySpecies = gql`
  query ($ability: String!, $take: Int, $reverse: Boolean) {
    getFuzzyAbility(ability: $ability, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const getFuzzyAbilityFullData = gql`
  query ($ability: String!, $take: Int, $reverse: Boolean) {
    getFuzzyAbility(ability: $ability, take: $take, reverse: $reverse) {
      desc
      isFieldAbility
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

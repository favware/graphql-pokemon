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

export const getFuzzyAbilityName = gql`
  query ($ability: String!, $take: Int, $reverse: Boolean) {
    getFuzzyAbility(ability: $ability, take: $take, reverse: $reverse) {
      name
    }
  }
`;

export const getFuzzyAbilityWithFullData = gql`
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

import gql from 'graphql-tag';

export const getAbilityName = gql`
  query ($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      name
    }
  }
`;

export const getAbilityWithFullData = gql`
  fragment AbilityFragment on Ability {
    key
    bulbapediaPage
    desc
    isFieldAbility
    isNonstandard
    name
    serebiiPage
    shortDesc
    smogonPage
  }

  query ($ability: AbilitiesEnum!) {
    getAbility(ability: $ability) {
      desc
      isFieldAbility
      isNonstandard
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
      key
      pokemonThatHaveThisAbility {
        key
        species
        abilities {
          first {
            ...AbilityFragment
          }
          hidden {
            ...AbilityFragment
          }
          second {
            ...AbilityFragment
          }
          special {
            ...AbilityFragment
          }
        }
      }
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
      isNonstandard
      name
      shortDesc
      serebiiPage
      smogonPage
      bulbapediaPage
    }
  }
`;

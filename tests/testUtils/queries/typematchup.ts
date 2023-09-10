import gql from 'graphql-tag';

export const getTypeMatchup = gql`
  fragment type on TypeEffectiveness {
    doubleEffectiveTypes
    doubleResistedTypes
    effectiveTypes
    effectlessTypes
    normalTypes
    resistedTypes
  }

  query GetTypeMatchup($primaryType: TypesEnum!, $secondaryType: TypesEnum) {
    getTypeMatchup(primaryType: $primaryType, secondaryType: $secondaryType) {
      attacking {
        ...type
      }
      defending {
        ...type
      }
    }
  }
`;

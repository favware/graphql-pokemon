import { gql } from '#test-utils/testUtils';

export const getTypeMatchup = gql`
  fragment type on Type {
    doubleEffectiveTypes
    doubleResistedTypes
    effectiveTypes
    effectlessTypes
    normalTypes
    resistedTypes
  }

  query ($types: [TypesEnum!]!) {
    getTypeMatchup(types: $types) {
      attacking {
        ...type
      }
      defending {
        ...type
      }
    }
  }
`;

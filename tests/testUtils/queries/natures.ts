import gql from 'graphql-tag';

export const getNatureName = gql`
  query ($nature: NaturesEnum!) {
    getNature(nature: $nature) {
      name
    }
  }
`;

export const getNatureWithFullData = gql`
  query ($nature: NaturesEnum!) {
    getNature(nature: $nature) {
      name
      increasedStat
      decreasedStat
      preferredFlavor
      dislikedFlavor
    }
  }
`;

export const getAllNatures = gql`
  {
    getAllNatures {
      key
      name
    }
  }
`;

import { natures } from '#assets/natures';
import { mapNatureDataToNatureGraphQL } from '#mappers/natureMapper';
import type { Nature } from '#types/graphql-mapped-types';
import type { NonNullish } from '#types/utility-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { preParseInput } from '#utils/utils';
import { validateGetNatureArgs, validateGetAllNaturesArgs, type GetAllNaturesArgs, type GetNatureArgs } from '#validations/getNatureArgs';

export function getNature(args: GetNatureArgs, requestedFields: GraphQLSet<keyof Nature>): Nature {
  args = validateGetNatureArgs(args);

  const natureFromDataset = natures.get(preParseInput(args.nature));

  if (!natureFromDataset) {
    throw new Error(`No nature found for ${args.nature}`);
  }

  const graphqlObject = mapNatureDataToNatureGraphQL({ data: natureFromDataset, requestedFields });

  if (!graphqlObject) {
    throw new Error(`Failed to get data for nature: ${args.nature}`);
  }

  return graphqlObject;
}

/**
 * Returns a list of all Natures.
 *
 */
export function getAllNatures(args: NonNullish<GetAllNaturesArgs>, requestedFields: GraphQLSet<keyof Nature>): Nature[] {
  args = validateGetAllNaturesArgs(args);

  const clonedNatures = natures.clone();

  const natureValues = [...clonedNatures.values()].slice(args.offset, args.offset + args.take);

  const graphqlObjects: Nature[] = [];

  for (const natureData of natureValues) {
    graphqlObjects.push(
      mapNatureDataToNatureGraphQL({
        data: natureData,
        requestedFields
      })
    );
  }

  if (!graphqlObjects.length) {
    throw new Error('Failed to get data for Natures');
  }

  return graphqlObjects;
}

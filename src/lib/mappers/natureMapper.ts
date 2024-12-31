import type { PokemonTypes } from '#assets/pokemon-source';
import type { Nature } from '#types/graphql-mapped-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { addPropertyToObjectFieldBased } from '#utils/addPropertyToObject';

export function mapNatureDataToNatureGraphQL({ data, requestedFields }: MapNatureDataToNatureGraphQLParameters): Nature {
  const natureObject: Nature = {} as Nature;

  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'key', propertyValue: data.key, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'name', propertyValue: data.name, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'increasedStat', propertyValue: data.increasedStat, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'decreasedStat', propertyValue: data.decreasedStat, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'preferredFlavor', propertyValue: data.preferredFlavor, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: natureObject, propertyKey: 'dislikedFlavor', propertyValue: data.dislikedFlavor, requestedFields });

  return natureObject;
}

interface MapNatureDataToNatureGraphQLParameters {
  data: PokemonTypes.Natures;
  requestedFields: GraphQLSet<keyof Nature>;
}

import type { PokemonTypes } from '#assets/pokemon-source';
import type { Item } from '#types/graphql-mapped-types';
import type { GraphQLSet } from '#utils/GraphQLSet';
import { addPropertyToObjectFieldBased } from '#utils/addPropertyToObject';
import { toLowerHyphenCase, toLowerSingleWordCase } from '#utils/utils';
import { toTitleCase } from '@sapphire/utilities';

export function mapItemDataToItemGraphQL({ data, requestedFields }: MapItemDataToItemGraphQLParameters): Item {
  const itemObject: Item = {} as Item;

  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'isNonstandard', propertyValue: data.isNonstandard, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: 'sprite',
    propertyValue: data.specialSprite ?? `https://play.pokemonshowdown.com/sprites/itemicons/${toLowerHyphenCase(data.name)}.png`,
    requestedFields
  });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'generationIntroduced', propertyValue: data.gen, requestedFields });

  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'key', propertyValue: data.key, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'name', propertyValue: data.name, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'desc', propertyValue: data.desc, requestedFields });
  addPropertyToObjectFieldBased({ objectTarget: itemObject, propertyKey: 'shortDesc', propertyValue: data.shortDesc, requestedFields });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: 'bulbapediaPage',
    propertyValue: `https://bulbapedia.bulbagarden.net/wiki/${toTitleCase(data.name).replace(/ /g, '_')}`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: 'serebiiPage',
    propertyValue: `https://www.serebii.net/itemdex/${toLowerSingleWordCase(data.name).replaceAll('é', 'e')}.shtml`,
    requestedFields
  });
  addPropertyToObjectFieldBased({
    objectTarget: itemObject,
    propertyKey: 'smogonPage',
    propertyValue: `https://www.smogon.com/dex/sv/items/${toLowerHyphenCase(data.name)}`,
    requestedFields
  });

  return itemObject;
}

interface MapItemDataToItemGraphQLParameters {
  data: PokemonTypes.Item;
  requestedFields: GraphQLSet<keyof Item>;
}

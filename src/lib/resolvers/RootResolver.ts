import { getAbility, getFuzzyAbility } from '#resolvers/abilityResolvers';
import { getFuzzyItem, getItem } from '#resolvers/itemResolver';
import { getFuzzyLearnset, getLearnset } from '#resolvers/learnsetResolvers';
import { getFuzzyMove, getMove } from '#resolvers/moveResolvers';
import { getAllPokemon, getFuzzyPokemon, getPokemon, getPokemonByDexNumber } from '#resolvers/pokemonResolvers';
import { getTypeMatchup } from '#resolvers/typeResolver';
import { graphqlResolveInfoToRequestedFields } from '#utils/getRequestedFields';
import type { IExecutableSchemaDefinition } from '@graphql-tools/schema';

export const RootResolver: IExecutableSchemaDefinition['resolvers'] = {
  Query: {
    getAbility(_, args, _2, info) {
      return getAbility(args, graphqlResolveInfoToRequestedFields(info));
    },
    getFuzzyAbility(_, args, _2, info) {
      return getFuzzyAbility(args, graphqlResolveInfoToRequestedFields(info));
    },
    getPokemonByDexNumber(_, args, _2, info) {
      return getPokemonByDexNumber(args, graphqlResolveInfoToRequestedFields(info));
    },
    getPokemon(_, args, _2, info) {
      return getPokemon(args, graphqlResolveInfoToRequestedFields(info));
    },
    getFuzzyPokemon(_, args, _2, info) {
      return getFuzzyPokemon(args, graphqlResolveInfoToRequestedFields(info));
    },
    getAllPokemon(_, args, _2, info) {
      return getAllPokemon(args, graphqlResolveInfoToRequestedFields(info));
    },
    getItem(_, args, _2, info) {
      return getItem(args, graphqlResolveInfoToRequestedFields(info));
    },
    getFuzzyItem(_, args, _2, info) {
      return getFuzzyItem(args, graphqlResolveInfoToRequestedFields(info));
    },
    getMove(_, args, _2, info) {
      return getMove(args, graphqlResolveInfoToRequestedFields(info));
    },
    getFuzzyMove(_, args, _2, info) {
      return getFuzzyMove(args, graphqlResolveInfoToRequestedFields(info));
    },
    getTypeMatchup(_, args, _2, info) {
      return getTypeMatchup(args, graphqlResolveInfoToRequestedFields(info));
    },
    getLearnset(_, args, _2, info) {
      return getLearnset(args, graphqlResolveInfoToRequestedFields(info));
    },
    getFuzzyLearnset(_, args, _2, info) {
      return getFuzzyLearnset(args, graphqlResolveInfoToRequestedFields(info));
    }
  }
};

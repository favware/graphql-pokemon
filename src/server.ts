import { abilities } from '#arguments/AbilityPaginatedArgs';
import { pokemons } from '#arguments/ExactPokemonPaginatedArgs';
import { items } from '#arguments/ItemPaginatedArgs';
import { moves } from '#arguments/MovePaginatedArgs';
import { types } from '#arguments/TypeArgs';
import AbilityResolver from '#resolvers/AbilityResolver';
import DexResolver from '#resolvers/DexResolver';
import ItemResolver from '#resolvers/ItemResolver';
import LearnsetResolver from '#resolvers/LearnsetResolver';
import MoveResolver from '#resolvers/MoveResolver';
import TypeResolver from '#resolvers/TypeResolver';
import tabs from '#root/defaultPlaygroundTabs';
import { ApolloServer } from 'apollo-server-koa';
import type { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { buildSchemaSync, registerEnumType } from 'type-graphql';

export const buildGqlSchema = (): GraphQLSchema => {
  registerEnumType(abilities, {
    name: 'Abilities',
    description: 'The supported abilities'
  });

  registerEnumType(items, {
    name: 'Items',
    description: 'The supported items'
  });

  registerEnumType(moves, {
    name: 'Moves',
    description: 'The supported moves'
  });

  registerEnumType(pokemons, {
    name: 'Pokemon',
    description: 'The supported Pokémon'
  });

  registerEnumType(types, {
    name: 'Types',
    description: 'The types in Pokémon'
  });

  return buildSchemaSync({
    resolvers: [DexResolver, AbilityResolver, ItemResolver, MoveResolver, TypeResolver, LearnsetResolver]
  });
};

const gqlServer = (): Koa<Koa.DefaultState, Koa.DefaultContext> => {
  const schema = buildGqlSchema();
  const app = new Koa();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: {
      endpoint: '/api',
      settings: {
        'editor.theme': 'dark',
        'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
        'editor.reuseHeaders': true
      },
      tabs
    }
  });

  apolloServer.applyMiddleware({ app, path: '/', cors: true });

  return app;
};

export default gqlServer;

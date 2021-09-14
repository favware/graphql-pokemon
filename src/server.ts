import { AbilityResolver } from '#resolvers/AbilityResolver';
import { DexResolver } from '#resolvers/DexResolver';
import { ItemResolver } from '#resolvers/ItemResolver';
import { LearnsetResolver } from '#resolvers/LearnsetResolver';
import { MoveResolver } from '#resolvers/MoveResolver';
import { TypeResolver } from '#resolvers/TypeResolver';
import tabs from '#root/defaultPlaygroundTabs';
import { abilities, items, moves, pokemons, types } from '#utils/enums';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-koa';
import type { GraphQLSchema } from 'graphql';
import Koa from 'koa';
import { buildSchema, registerEnumType } from 'type-graphql';

export const buildGqlSchema = (): Promise<GraphQLSchema> => {
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

  return buildSchema({
    resolvers: [DexResolver, AbilityResolver, ItemResolver, MoveResolver, TypeResolver, LearnsetResolver],
    dateScalarMode: 'isoDate'
  });
};

const gqlServer = async (): Promise<Koa<Koa.DefaultState, Koa.DefaultContext>> => {
  const schema = await buildGqlSchema();
  const app = new Koa();
  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          'editor.theme': 'dark',
          'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, Courier New, monospace',
          'editor.reuseHeaders': true
        },
        tabs
      })
    ]
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/', cors: true });

  return app;
};

export default gqlServer;

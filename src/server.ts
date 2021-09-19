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
    name: 'AbilitiesEnum',
    description: 'The supported abilities'
  });

  registerEnumType(items, {
    name: 'ItemsEnum',
    description: 'The supported items'
  });

  registerEnumType(moves, {
    name: 'MovesEnum',
    description: 'The supported moves'
  });

  registerEnumType(pokemons, {
    name: 'PokemonEnum',
    description: 'The supported Pokémon'
  });

  registerEnumType(types, {
    name: 'TypesEnum',
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

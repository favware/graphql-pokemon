import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchemaSync, registerEnumType } from 'type-graphql';
import { Abilities } from './arguments/AbilityPaginatedArgs';
import { Pokemon } from './arguments/ExactPokemonPaginatedArgs';
import { Items } from './arguments/ItemPaginatedArgs';
import { Moves } from './arguments/MovePaginatedArgs';
import { Types } from './arguments/TypeArgs';
import tabs from './defaultPlaygroundTabs';
import AbilityResolver from './resolvers/AbilityResolver';
import DexResolver from './resolvers/DexResolver';
import ItemResolver from './resolvers/ItemResolver';
import LearnsetResolver from './resolvers/LearnsetResolver';
import MoveResolver from './resolvers/MoveResolver';
import TypeResolver from './resolvers/TypeResolver';

export const buildGqlSchema = () => {
  registerEnumType(Abilities, {
    name: 'Abilities',
    description: 'The supported abilities'
  });

  registerEnumType(Items, {
    name: 'Items',
    description: 'The supported items'
  });

  registerEnumType(Moves, {
    name: 'Moves',
    description: 'The supported moves'
  });

  registerEnumType(Pokemon, {
    name: 'Pokemon',
    description: 'The supported Pokémon'
  });

  registerEnumType(Types, {
    name: 'Types',
    description: 'The types in Pokémon'
  });

  return buildSchemaSync({
    resolvers: [DexResolver, AbilityResolver, ItemResolver, MoveResolver, TypeResolver, LearnsetResolver]
  });
};

const gqlServer = () => {
  const schema = buildGqlSchema();
  const app = express();
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

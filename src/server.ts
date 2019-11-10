import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchemaSync, registerEnumType } from 'type-graphql';
import DexResolver from './resolvers/DexResolver';
import AbilityResolver from './resolvers/AbilityResolver';
import ItemResolver from './resolvers/ItemResolver';
import MoveResolver from './resolvers/MoveResolver';
import { Types } from './arguments/TypeArgs';
import TypeResolver from './resolvers/TypeResolver';
import { Items } from './arguments/ItemPaginatedArgs';
import { Abilities } from './arguments/AbilityPaginatedArgs';
import { Moves } from './arguments/MovePaginatedArgs';
import { Pokemon } from './arguments/ExactPokemonPaginatedArgs';
import LearnsetResolver from './resolvers/LearnsetResolver';

const gqlServer = () => {
  registerEnumType(Abilities, {
    name: 'Abilities',
    description: 'The supported abilities',
  });

  registerEnumType(Items, {
    name: 'Items',
    description: 'The supported items',
  });

  registerEnumType(Moves, {
    name: 'Moves',
    description: 'The supported moves',
  });

  registerEnumType(Pokemon, {
    name: 'Pokemon',
    description: 'The supported Pokémon',
  });

  registerEnumType(Types, {
    name: 'Types',
    description: 'The types in Pokémon',
  });

  const app = express();
  const schema = buildSchemaSync(
    {
      resolvers: [
        DexResolver, AbilityResolver, ItemResolver, MoveResolver, TypeResolver, LearnsetResolver
      ],
    }
  );

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: { endpoint: '/playground' },
  });

  apolloServer.applyMiddleware({ app, path: '/', cors: true });

  return app;
};

export default gqlServer;
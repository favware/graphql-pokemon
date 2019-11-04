import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchemaSync} from 'type-graphql';
import DexResolver from '../resolvers/DexResolver';
import AbilityResolver from '../resolvers/AbilityResolver';

const gqlServer = () => {
  const app = express();
  const schema = buildSchemaSync({resolvers: [ DexResolver, AbilityResolver ]});

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: {endpoint: '/playground'},
  });

  apolloServer.applyMiddleware({app, path: '/', cors: true});

  return app;
};

export default gqlServer;
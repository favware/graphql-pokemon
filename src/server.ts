import { RootResolver } from '#resolvers/RootResolver';
import { defaultDocument, defaultVariables } from '#root/defaultDocument';
import { RootTypedef } from '#utils/typeDefs';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';

const gqlServer = async (): Promise<Koa<Koa.DefaultState, Koa.DefaultContext>> => {
  const app = new Koa();
  const apolloServer = new ApolloServer({
    resolvers: RootResolver,
    typeDefs: RootTypedef,
    introspection: true,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({
        footer: false,
        document: defaultDocument,
        variables: defaultVariables,
        embed: true
      })
    ]
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/', cors: true });

  return app;
};

export default gqlServer;

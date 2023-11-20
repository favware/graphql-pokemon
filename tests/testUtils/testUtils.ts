import { RootResolver } from '#resolvers/RootResolver';
import type { Query } from '#test-utils/types';
import { RootTypedef } from '#utils/grapqhl-root-typedef-resolver';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { createServer } from 'node:http';

let testServer: ApolloServer | undefined = undefined;

export async function executeGraphQL<K extends keyof Omit<Query, '__typename'> | unknown>(
  args: Pick<Parameters<ApolloServer['executeOperation']>[0], 'query' | 'variables'>
) {
  if (testServer === undefined) {
    const app = new Koa();
    const httpServer = createServer(app.callback());

    app.use(cors());
    app.use(bodyParser());

    testServer = new ApolloServer({
      resolvers: RootResolver,
      typeDefs: RootTypedef,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
    });
  }

  const response = await testServer.executeOperation(args);

  if (response.body.kind === 'incremental') {
    throw new Error('Incremental responses are not supported');
  }

  return {
    errors: response.body.singleResult.errors,
    data: response.body.singleResult.data as K extends keyof Omit<Query, '__typename'> ? Record<K, Omit<Query[K], '__typename'>> : never
  };
}

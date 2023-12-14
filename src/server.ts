import { RootResolver } from '#resolvers/RootResolver';
import { defaultDocument, defaultVariables } from '#root/defaultDocument';
import { RootTypedef } from '#utils/grapqhl-root-typedef-resolver';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { koaMiddleware } from '@as-integrations/koa';
import cors from '@koa/cors';
import { JsonStreamStringify } from 'json-stream-stringify';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { createServer, type IncomingMessage, type Server, type ServerResponse } from 'node:http';

const gqlServer = async (): Promise<Server<typeof IncomingMessage, typeof ServerResponse>> => {
  const app = new Koa();
  const httpServer = createServer(app.callback());

  const apolloServer = new ApolloServer({
    resolvers: RootResolver,
    typeDefs: RootTypedef,
    introspection: true,
    status400ForVariableCoercionErrors: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({
        footer: false,
        document: defaultDocument,
        variables: defaultVariables,
        embed: true
      })
    ],
    stringifyResult: async (value) => {
      const stringifyStream = new JsonStreamStringify(value);
      let stringified = '';

      try {
        for await (const chunk of stringifyStream) {
          stringified += chunk;
        }

        return `${stringified}\n`;
      } catch (error) {
        return '';
      }
    }
  });

  await apolloServer.start();

  app.use(cors());
  app.use(bodyParser());
  app.use(
    koaMiddleware(apolloServer, {
      // eslint-disable-next-line @typescript-eslint/require-await
      context: async ({ ctx }) => ({ token: ctx.headers.token })
    })
  );

  return httpServer;
};

export default gqlServer;

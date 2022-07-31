import { RootResolver } from '#resolvers/RootResolver';
import type { Query } from '#test-utils/types';
import { RootTypedef } from '#utils/typeDefs';
import { ApolloServer } from 'apollo-server-koa';

let testServer: ApolloServer | undefined = undefined;

export async function executeGraphQL<K extends keyof Omit<Query, '__typename'> | unknown>(
  args: Pick<Parameters<ApolloServer['executeOperation']>[0], 'query' | 'variables'>
) {
  if (testServer === undefined) {
    testServer = new ApolloServer({
      resolvers: RootResolver,
      typeDefs: RootTypedef
    });
  }

  const response = await testServer.executeOperation(args);

  return {
    errors: response.errors,
    data: response.data as K extends keyof Omit<Query, '__typename'> ? Record<K, Omit<Query[K], '__typename'>> : never
  };
}

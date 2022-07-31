import { gql } from 'apollo-server-koa';
import type { PathLike } from 'node:fs';
import { readFile } from 'node:fs/promises';

const importGraphQL = async (file: PathLike) => readFile(file, { encoding: 'utf8' });

const gqlFileWrapper = (...files: string[]) => gql`
  ${files}
`;

const graphqlDir = new URL('../../../graphql/', import.meta.url);
const enums = await importGraphQL(new URL('enums.graphql', graphqlDir));
const resolvers = await importGraphQL(new URL('resolvers.graphql', graphqlDir));
const schema = await importGraphQL(new URL('schema.graphql', graphqlDir));

export const RootTypedef = gqlFileWrapper(enums, schema, resolvers);

import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import type { PathLike } from 'node:fs';
import { readFile } from 'node:fs/promises';

/**
 * Reads and imports a GraphQL file.
 * @param file - The path to the GraphQL file.
 * @returns A promise that resolves to the content of the file as a string.
 */
const importGraphQL = async (file: PathLike) => readFile(file, { encoding: 'utf8' });

/**
 * Wraps the given files in a gql template literal.
 * @param files - The files to be wrapped.
 * @returns The gql template literal with the wrapped files.
 */
const gqlFileWrapper = (...files: string[]) => gql`
  ${files}
`;

const graphqlDir = new URL('../../../graphql/', import.meta.url);
const enums = await importGraphQL(new URL('enums.graphql', graphqlDir));
const resolvers = await importGraphQL(new URL('resolvers.graphql', graphqlDir));
const schema = await importGraphQL(new URL('schema.graphql', graphqlDir));

/** Root type definition for GraphQL */
export const RootTypedef: DocumentNode = gqlFileWrapper(enums, schema, resolvers);

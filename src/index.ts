import 'reflect-metadata';
import {https} from 'firebase-functions';
import gqlServer from './graphql/server';

// If we're not in the Cloud Functions environment, spin up a Node server
// If (!process.env.FIREBASE_CONFIG) {
//   Const PORT = process.env.PORT || 4000;
//   App.listen(PORT, () => {
//     Console.log('server started on http://localhost:4000/graphql'); // eslint-disable-line no-console
//   });
// }

const server = gqlServer();

export const api = https.onRequest(server);
export * from './client';
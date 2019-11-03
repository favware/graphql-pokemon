import 'reflect-metadata';
import * as functions from 'firebase-functions';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {buildSchemaSync} from 'type-graphql';
import DexResolver from './resolvers/DexResolver';

const schema = buildSchemaSync({resolvers: [ DexResolver ]});
const apolloServer = new ApolloServer({schema});
const app = express();

apolloServer.applyMiddleware({app});

app.get('/', (_req, res) => {
  return res.send('Looks like you hit a non-existing endpoint!');
});

// If we're not in the Cloud Functions environment, spin up a Node server
if (!process.env.FIREBASE_CONFIG) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log('server started on http://localhost:4000/graphql'); // eslint-disable-line no-console
  });
}

export const api = functions.https.onRequest(app);
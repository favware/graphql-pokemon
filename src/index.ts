import * as functions from 'firebase-functions';
import express from 'express';
import expressGraphql from 'express-graphql';

const app = express();

app.use('/graphql', expressGraphql({
  schema: DexSchema,
  graphiql: true,
}));

app.get('/', (_req, res) => {
  return res.send('test');
});

export const apo = functions.https.onRequest(app);
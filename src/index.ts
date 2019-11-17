import 'reflect-metadata';
import gqlServer from './server';

const port = process.env.PORT || 4000;
const server = gqlServer();

server.listen(port, () => {
  console.log(`server started on http://localhost:${port}`); // eslint-disable-line no-console
});
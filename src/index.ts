import 'reflect-metadata';
import gqlServer from './server';
import Util from './utils/util';

const port = process.env.PORT || 4000;
const server = gqlServer();

server.listen(port, () => {
  Util.kConsole.log(`server started on http://localhost:${port}`);
});

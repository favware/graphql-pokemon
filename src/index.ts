import { KlasaConsole } from '@klasa/console';
import 'reflect-metadata';
import gqlServer from './server';

const kConsole = new KlasaConsole({
  useColor: true,
  timestamps: true,
  utc: false
});

const port = process.env.PORT || 4000;
const server = gqlServer();

server.listen(port, () => {
  kConsole.log(`server started on http://localhost:${port}`);
});

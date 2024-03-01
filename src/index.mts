import { createServer } from 'node:http';

const errorMessage = [
  'REMOVAL NOTICE! This version of the API is no longer supported. For the latest version please use https://graphqlpokemon.favware.tech/v8.',
  'For more information please join the Discord server through https://discord.com/invite/sguypX8.',
  'Hosting your own Discord bot that uses this API? Please consider inviting the official Dragonite#6692 bot instead, as it already uses the latest features and is actively maintained by the same developers who brought you graphql-pokemon.',
  'You can invite Dragonite#6692 through the URL: https://discord.com/oauth2/authorize?client_id=931264626614763530&permissions=412317240320&scope=applications.commands%20bot.'
].join(' ');

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

createServer((_, res) => {
  res //
    .writeHead(410, { 'Content-Type': 'application/json' })
    .end(JSON.stringify({ error: errorMessage }));
}).listen(Number(port), host, () => {
  console.log(`server started on http://${host}:${port}`);
});

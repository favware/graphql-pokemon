import Fastify from 'fastify';

const fastify = Fastify({
  logger: false,
  disableRequestLogging: true
});

const errorMessage = [
  'REMOVAL NOTICE! This version of the API is no longer supported. For the latest version please use https://graphqlpokemon.favware.tech/v7.',
  'For more information please join the Discord server through https://discord.com/invite/sguypX8.',
  'Hosting your own Discord bot that uses this API? Please consider inviting the official Dragonite#6692 bot instead, as it already uses the latest features and is actively maintained by the same developers who brought you graphql-pokemon.',
  'You can invite Dragonite#6692 through the URL: https://discord.com/oauth2/authorize?client_id=931264626614763530&permissions=412317240320&scope=applications.commands%20bot.'
].join(' ');

fastify.route({
  method: [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
    'OPTIONS',
    'SEARCH',
    'TRACE',
    'PROPFIND',
    'PROPPATCH',
    'MKCOL',
    'COPY',
    'MOVE',
    'LOCK',
    'UNLOCK'
  ],
  url: '/',
  handler: (_, response) => {
    void response //
      .code(410)
      .send({ error: errorMessage });
  }
});

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

fastify.listen({ port: Number(port), host }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`server started on ${address}`);
});

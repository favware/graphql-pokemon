import gqlServer from '#root/server';

const port = process.env.PORT || 4000;
const server = await gqlServer();

server.listen({ port: Number(port), host: '127.0.0.1' }, () => {
  console.log(`server started on http://localhost:${port}`);
});

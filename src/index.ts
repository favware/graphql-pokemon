import '#utils/flavorsModule';
import '#utils/formatsModule';
import process from 'node:process';
import gqlServer from '#root/server';

const port = process.env.PORT ?? 4_000;
const server = await gqlServer();

server.listen({ port: Number(port) }, () => {
	console.log(`server started on http://localhost:${port}`);
});

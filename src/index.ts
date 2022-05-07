import { createServer, YogaInitialContext } from "@graphql-yoga/node";

interface Server extends YogaInitialContext {}

const context = (ctx: Server) => {
  return ctx;
};

export const startServer = async () => {
  const server = createServer<Server>({
    port: process.env.PORT,
    context,
  });

  server.start();
};

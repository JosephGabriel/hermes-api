import { createServer, YogaInitialContext } from "@graphql-yoga/node";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

export interface Server extends YogaInitialContext {}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const context = (ctx: Server) => {
  return ctx;
};

export const startServer = async () => {
  const server = createServer<Server>({
    port: process.env.PORT,
    schema,
    context,
  });

  server.start();
};

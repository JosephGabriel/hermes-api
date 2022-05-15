import { makeExecutableSchema } from "@graphql-tools/schema";

import {
  createServer,
  createPubSub,
  YogaInitialContext,
} from "@graphql-yoga/node";

import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const pubsub = createPubSub<{
  randomNumber: [randomNumber: string];
  randomNumber2: [randomNumber2: string];
}>();

export interface Server extends YogaInitialContext {
  pubsub: typeof pubsub;
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const context = (ctx: Server) => {
  return {
    ...ctx,
    pubsub,
  };
};

export const startServer = async () => {
  const server = createServer<Server>({
    port: process.env.PORT,
    schema,
    context,
  });

  server.start();
};

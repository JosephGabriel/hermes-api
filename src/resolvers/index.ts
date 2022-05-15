import { Resolvers } from "../generated/schema";
import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Chat } from "./Chat";
import { Message } from "./Message";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Chat,
  Message,
};

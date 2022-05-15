import { Resolvers } from "../generated/schema";
import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { Chat } from "./Chat";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Chat,
};

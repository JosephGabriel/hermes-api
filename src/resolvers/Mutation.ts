import { Chat } from "../../models/chat";
import { MutationResolvers } from "../generated/schema";

export const Mutation: MutationResolvers = {
  async createChat(parent, { data }) {
    const chat = await Chat.create(data);

    return chat;
  },
};

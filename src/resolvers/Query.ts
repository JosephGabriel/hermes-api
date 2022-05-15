import { Chat } from "../../models/chat";
import { User } from "../../models/user";
import { QueryResolvers } from "../generated/schema";

export const Query: QueryResolvers = {
  async users() {
    const users = await User.find();

    return users;
  },

  async chats() {
    const chats = await Chat.find();

    return chats;
  },
};

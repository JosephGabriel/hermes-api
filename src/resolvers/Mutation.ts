import { GraphQLYogaError } from "@graphql-yoga/node";
import { Chat } from "../../models/chat";
import { Message } from "../../models/message";
import { User } from "../../models/user";
import { MutationResolvers } from "../generated/schema";

export const Mutation: MutationResolvers = {
  async createChat(parent, { data }) {
    data.participants.map(async (user) => {
      const hasUser = await User.findById(user);

      if (!hasUser) {
        throw new GraphQLYogaError("Usuário inválido");
      }
    });

    const chat = await Chat.create(data);

    return chat;
  },

  async createUser(parent, { data }) {
    const user = await User.create(data);

    return user;
  },

  async createMessage(parent, { data }) {
    const user = await User.findById(data.sender);

    if (!user) {
      throw new GraphQLYogaError("Usuário inválido");
    }

    const message = await Message.create({
      ...data,
      chat: data.chat,
      createdAt: new Date(),
    });

    return message;
  },
};

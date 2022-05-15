import { User } from "../../models/user";
import { Chat as IChat, ChatResolvers } from "../generated/schema";

export const Chat: ChatResolvers = {
  participants: {
    async resolve(parent: IChat) {
      const participants = parent.participants.map(async (id) => {
        const user = await User.findById(id);

        return user;
      });

      return participants;
    },
  },
};

import { User } from "../../models/user";
import { Message as IMessage } from "../../models/types";
import { MessageResolvers } from "../generated/schema";

export const Message: MessageResolvers = {
  sender: {
    async resolve(parent: IMessage) {
      const user = await User.findById(parent.sender);

      return user;
    },
  },
};

import { model, Schema } from "mongoose";
import { Chat as IChat } from "./types";

const chatSchema = new Schema<IChat>({
  participants: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

export const Chat = model("Chat", chatSchema);

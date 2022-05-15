import { model, Schema } from "mongoose";
import { Message as IMessage } from "./types";

const messageSchema = new Schema<IMessage>({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  chat: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Chat",
  },
  sender: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
});

export const Message = model<IMessage>("Message", messageSchema);

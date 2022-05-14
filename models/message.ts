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
  sender: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Message = model("Message", messageSchema);

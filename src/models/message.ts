import { Schema, model } from "mongoose";
import { Message as IMessage } from "./types";

export const MessageSchema = new Schema<IMessage>({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  text: {
    type: String,
    required: [true, "Requer um texto"],
  },
});

export const Message = model("Chat", MessageSchema);

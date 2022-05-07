import { Schema, model } from "mongoose";
import { Chat as IChat } from "./types";

export const ChatSchema = new Schema<IChat>({
  title: {
    type: String,
    trim: true,
    required: [true, "Requer um titulo"],
  },
  image: {
    type: String,
    trim: true,
    required: [true, "Requer uma imagem"],
  },
  participants: {
    type: [String],
    required: [true, "Requer dois ou mais participantes"],
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Messages",
    },
  ],
});

export const Chat = model("Chat", ChatSchema);

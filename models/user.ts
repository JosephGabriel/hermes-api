import { model, Schema } from "mongoose";
import { User as IUser } from "./types";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  image: {
    type: String,
    required: true,
  },
  chats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  ],
});

export const User = model<IUser>("User", userSchema);

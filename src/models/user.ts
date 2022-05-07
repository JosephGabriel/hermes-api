import { Schema, model } from "mongoose";
import { User as IUser } from "./types";

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Requer um nome"],
  },
  chats: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  phone: String,
  image: String,
});

export const User = model("Chat", UserSchema);

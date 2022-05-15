export interface UserMapper {
  _id: string;
  name: string;
  phone: string;
  image: string;
  password: string;
  chats: ChatMapper[];
}

export interface ChatMapper {
  _id: string;
  participants: UserMapper[];
  messages: MessageMapper[];
  createdAt: Date;
}

export interface MessageMapper {
  _id: string;
  sender: UserMapper;
  text: string;
  createdAt: Date;
}

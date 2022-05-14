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
  title: string;
  image: string;
  participants: string[];
  messages: MessageMapper[];
  createdAt: Date;
}

export interface MessageMapper {
  _id: string;
  sender: UserMapper;
  text: string;
  createdAt: Date;
}

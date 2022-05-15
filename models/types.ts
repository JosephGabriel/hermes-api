export interface User {
  name: string;
  phone: string;
  image: string;
  chats: Chat[];
}

export interface Chat {
  title: string;
  image: string;
  participants: string[];
  messages: Message[];
  createdAt: Date;
}

export interface Message {
  sender: User;
  chat: Chat;
  text: string;
  createdAt: Date;
}

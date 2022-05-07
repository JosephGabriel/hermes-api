export interface Chat {
  title: string;
  image: string;
  participants: string[];
  messages?: Message[];
  createdAt: Date;
}

export interface Message {
  sender: User;
  text: string;
  createdAt: Date;
}

export interface User {
  name: string;
  phone: string;
  image: string;
  chats: Chat[];
}

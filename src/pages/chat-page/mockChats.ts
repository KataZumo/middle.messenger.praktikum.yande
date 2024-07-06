import { ChatList } from "../../components";

export const mockChats = [
  {
    name: "Alice",
    message: "Hello, how are you?",
    unread: 2,
    avatar: "https://example.com/avatar1.jpg",
  },
  {
    name: "Bob",
    message: "Are we meeting tomorrow?",
    unread: 0,
    avatar: "https://example.com/avatar2.jpg",
  },
  {
    name: "Charlie",
    message: "Dont forget to check the document.",
    unread: 5,
    avatar: "https://example.com/avatar3.jpg",
  },
];


export const chatList = new ChatList({ chats: mockChats });
console.log("🚀 ~ chatList:", chatList);

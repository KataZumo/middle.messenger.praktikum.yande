// export const mockChats = [
//     { name: 'Samanta Smith', message: 'Алло, на!', unread: 3, avatar: 'https://example.com/avatar1.png' },
//     { name: 'John Dow 1', message: 'What?', unread: 1, avatar: 'https://example.com/avatar2.png' },
//     { name: 'John Dow 2', message: 'Hello there!', unread: 2, avatar: 'https://example.com/avatar3.png' },
//     { name: 'John Dow 3', message: 'Good morning!', unread: 0, avatar: 'https://example.com/avatar4.png' },
//     { name: 'John Dow 4', message: 'See you later!', unread: 5, avatar: 'https://example.com/avatar5.png' },
//     { name: 'John Dow 5', message: 'Goodbye!', unread: 0, avatar: 'https://example.com/avatar6.png' },
//     { name: 'John Dow 6', message: 'How are you?', unread: 4, avatar: 'https://example.com/avatar7.png' }
//   ];

import { ChatList } from "../../components";

// import { ChatItem } from "../../components";




//     export const  mockChats: [
//         new ChatItem ({ name: 'Samanta Smith', message: 'Алло, на!', unread: 3, avatar: 'https://example.com/avatar1.png' }),
//         new ChatItem ({ name: 'John Dow 1', message: 'What?', unread: 1, avatar: 'https://example.com/avatar2.png' }),
//         new ChatItem ({ name: 'John Dow 2', message: 'Hello there!', unread: 2, avatar: 'https://example.com/avatar3.png' }),
//         new ChatItem ({ name: 'John Dow 3', message: 'Good morning!', unread: 0, avatar: 'https://example.com/avatar4.png' }),
//         new ChatItem ({ name: 'John Dow 4', message: 'See you later!', unread: 5, avatar: 'https://example.com/avatar5.png' }),
//         new ChatItem ({ name: 'John Dow 5', message: 'Goodbye!', unread: 0, avatar: 'https://example.com/avatar6.png' }),
//         new ChatItem ({ name: 'John Dow 6', message: 'How are you?', unread: 4, avatar: 'https://example.com/avatar7.png' })
//       ]


export const mockChats = [
  {
    name: 'Alice',
    message: 'Hello, how are you?',
    unread: 2,
    avatar: 'https://example.com/avatar1.jpg'
  },
  {
    name: 'Bob',
    message: 'Are we meeting tomorrow?',
    unread: 0,
    avatar: 'https://example.com/avatar2.jpg'
  },
  {
    name: 'Charlie',
    message: 'Dont forget to check the document.',
    unread: 5,
    avatar: 'https://example.com/avatar3.jpg'
  }
];

// Создание экземпляра ChatList с моковыми данными
export const chatList = new ChatList({ chats: mockChats });
console.log("🚀 ~ chatList:", chatList)
// document.body.appendChild(chatList.getContent());

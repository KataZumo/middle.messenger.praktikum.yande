// import Handlebars from 'handlebars';
// import './chat-page.scss';
// export { default as ChatPage } from './chat-page.hbs?raw';

// Handlebars.registerHelper('chat-page-list', () => {
//   return [
//     { name: 'Гроги', message: 'This is the way', unread: '2', avatar: "https://img.championat.com/news/big/s/t/dzhordzh-lukas-perezhival-za-sudbu-grogu-v-mandalorce_16455285911226720657.jpg" },
//     { name: 'Вейдер', message: 'Гля что сделал....', avatar: "https://t4.ftcdn.net/jpg/03/13/36/79/360_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg" },
//     { name: 'Джордан Валке', message: 'Новую версию выкатил. Надо обновляться', unread: '4', avatar: "https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg"}
//   ];
// });



import Block from '../../tools/Block';
import ChatList from '../../components/chat-list';
import ChatItem from '../../components/chat-item';
import Link from '../../components/link';
import './chat-page.scss';
import { mockChats } from './mockChats';

interface ChatPageProps {
  currentChatName?: string;
  chats?: Array<{ name: string, message: string, unread?: number, avatar?: string }>;
}

export default class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    const chatList = new ChatList({ chats: mockChats });
    super({
      ...props,
      currentChatName: 'Samanta Smith',
      profileLink: new Link({
        text: 'Профиль',
        href: '/profile',
        className: 'chat-page__profile-link'
      }),
      chatList: new ChatList({
        chats: mockChats
      })
      // mockChats: [
      //   new ChatItem ({ name: 'Samanta Smith', message: 'Алло, на!', unread: 3, avatar: 'https://example.com/avatar1.png' }),
      //   new ChatItem ({ name: 'John Dow 1', message: 'What?', unread: 1, avatar: 'https://example.com/avatar2.png' }),
      //   new ChatItem ({ name: 'John Dow 2', message: 'Hello there!', unread: 2, avatar: 'https://example.com/avatar3.png' }),
      //   new ChatItem ({ name: 'John Dow 3', message: 'Good morning!', unread: 0, avatar: 'https://example.com/avatar4.png' }),
      //   new ChatItem ({ name: 'John Dow 4', message: 'See you later!', unread: 5, avatar: 'https://example.com/avatar5.png' }),
      //   new ChatItem ({ name: 'John Dow 5', message: 'Goodbye!', unread: 0, avatar: 'https://example.com/avatar6.png' }),
      //   new ChatItem ({ name: 'John Dow 6', message: 'How are you?', unread: 4, avatar: 'https://example.com/avatar7.png' })
      // ]
    });
  }


  render() {
    return `
      <div class="chat-page">
        <div class="chat-page__sidebar">
          <div class="chat-page__sidebar-header">
            {{{profileLink}}}
            <input type="text" placeholder="Поиск" class="chat-page__search-input"/>
          </div>
          {{{chatList}}}
        </div>
        <div class="chat-page__main">
          <div class="chat-page__header">
            <h2>Чат с {{currentChatName}}</h2>
          </div>
          <div class="chat-page__messages" id="messages">
          </div>
          <div class="chat-page__footer">
            <input type="text" id="message" placeholder="Введите сообщение..." />
            <button id="send-button">Отправить</button>
          </div>
        </div>
      </div>
    `;
  }
}



      // chatList: new ChatList({
      //   className: 'chat-page__list',
      //   chats: props
      // }),

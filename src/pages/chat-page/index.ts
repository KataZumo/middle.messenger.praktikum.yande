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

import Block from "../../tools/Block";
import ChatItem from "../../components/chat-item";
import Link from "../../components/link";
import "./chat-page.scss";

interface ChatPageProps {
  currentChatName?: string;
  chats?: Array<{
    name: string;
    message: string;
    unread?: number;
    avatar?: string;
  }>;
}

export default class ChatPage extends Block {
  constructor(props: ChatPageProps) {
    super({
      ...props,
      profileLink: new Link({
        text: "Профиль",
        href: "/profile",
        className: "chat-page__profile-link",
      }),

      chat: new ChatItem({
        name: "Вейдер",
        message: "Скоро прикоюху сделаю",
        avatar:
          "https://t4.ftcdn.net/jpg/03/13/36/79/360_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg",
      }),
      chat1: new ChatItem({
        name: "Люк",
        message: "я твой отец",
      }),
      chat2: new ChatItem({
        name: "Брат",
        message: "го тусить",
        avatar:
          "https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg",
      }),
      chat3: new ChatItem({
        name: "Икогнито",
        message: "кредит не нужен?",
      }),
      chat4: new ChatItem({
        name: "Хомяк",
        message: "потыкай еще",
      }),
      chat5: new ChatItem({
        name: "Хомяк",
        message: "потыкай еще",
      }),

      //     lists: [
      //       new ChatItem({name: 'Samanta Smith', message: 'Алло, на!',}),
      //       new ChatItem({name: 'John Dow 1', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 2', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 3', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 4', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 5', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 6', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'Samanta Smith', message: 'Алло, на!',}),
      //       new ChatItem({name: 'John Dow 1', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 2', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 3', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 4', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 5', message: 'What?',}),
      //       new ChatItem({name: 'John Dow 6', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      //       new ChatItem({name: 'John Dow', message: 'What?',}),
      // ],
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
          <div class="chat-page__chats">
            {{{chat}}}
            {{{chat1}}}
            {{{chat2}}}
            {{{chat3}}}
            {{{chat4}}}
            {{{chat5}}}
          </div>
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

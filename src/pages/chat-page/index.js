import Handlebars from 'handlebars';
import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Гроги', message: 'This is the way', unread: '2', avatar: "https://img.championat.com/news/big/s/t/dzhordzh-lukas-perezhival-za-sudbu-grogu-v-mandalorce_16455285911226720657.jpg" },
    { name: 'Вейдер', message: 'Гля что сделал....', avatar: "https://t4.ftcdn.net/jpg/03/13/36/79/360_F_313367965_7B8Y7JrJ3JAG6zdjw51L59kVQZMlA9K7.jpg" },
    { name: 'Джордан Валке', message: 'Новую версию выкатил. Надо обновляться', unread: '4', avatar: "https://thediffpodcast.com/assets/images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg"}
  ];
});


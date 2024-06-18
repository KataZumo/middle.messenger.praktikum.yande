import Handlebars from 'handlebars';
import './chat-page.scss';
export { default as ChatPage } from './chat-page.hbs?raw';

Handlebars.registerHelper('chat-page-list', () => {
  return [
    { name: 'Гроги', message: 'This is the way', unread: '2', avatar: "../assets/image.png" },
    { name: 'Вейдер', message: 'Гля что сделал....', avatar: "../assets/veider.png" },
    { name: 'Джордан Валке', message: 'Новую версию выкатил. Надо обновляться', unread: '4', avatar: "../assets/react.png"}
  ];
});


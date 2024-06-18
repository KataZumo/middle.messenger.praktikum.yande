import Handlebars from 'handlebars';
import './profile-page.scss';
export { default as ProfilePage } from './profile-page.hbs?raw';

Handlebars.registerHelper('profile-info', () => {
  return [
    { label: 'Email', value: 'test@example.com' },
    { label: 'Login', value: 'login' },
    { label: 'First Name', value: 'Гроги' },
    { label: 'Last Name', value: 'Doe' },
    { label: 'Chat Name', value: 'login' },
    { label: 'Phone', value: '+1 234 567 890' },
  ];
});

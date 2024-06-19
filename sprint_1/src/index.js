import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { initializeProfilePage, passwordData, profileData } from './pages/profile-page';

const pages = {
  'chat': [ Pages.ChatPage ],
  'login': [ Pages.LoginPage ],
  'register': [ Pages.RegisterPage ],
  'profile': [ Pages.ProfilePage, profileData ],
  'change': [ Pages.ChangePage, profileData ],
  'change-password': [ Pages.PasswordPage, passwordData ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);

    // Инициализация специфичных для страницы функций
    if (page === 'profile') {
      initializeProfilePage();
    }
}


document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
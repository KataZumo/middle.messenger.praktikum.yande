import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { initializeProfilePage, passwordData, profileData } from './pages/profile-page';


Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
  });

const pages = {
  'chat': [ Pages.ChatPage ],
  'login': [ Pages.LoginPage ],
  'register': [ Pages.RegisterPage ],
  'profile': [ Pages.ProfilePage, profileData ],
  'change': [ Pages.ChangePage, profileData ],
  'change-password': [ Pages.PasswordPage, passwordData ],
  'error-404' : [ Pages.Error404Page ],
  'error-500' : [ Pages.Error500Page ]
};

function navigate(page: string) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  document.body.innerHTML = handlebarsFunct(args);

    if (page === 'profile') {
      initializeProfilePage();
    }
}


document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.substring(1) || 'login';
  navigate(path);
});

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    history.pushState({}, '', `/${page}`);
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname.substring(1) || 'login';
  navigate(path);
});

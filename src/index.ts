import ProfileInfoComponent from './components/profile-info';
import ChatPage from './pages/chat-page';
import LoginPage from './pages/login-page';
import ProfilePage from './pages/profile-page';
import RegisterPage from './pages/register-page';

type PageConstructor = new (props: any) => any;

const pages: Record<string, PageConstructor> = {
  'login': LoginPage,
  'register': RegisterPage,
  'chat': ChatPage,
  'profile': ProfilePage,
};

function navigate(page: string) {
  const PageClass = pages[page];
  if (!PageClass) {
    console.error(`Страница ${page} не найдена`);
    return;
  }
  
  const pageInstance = new PageClass({});
  const container = document.getElementById('app')!;
  container.innerHTML = ''; 
  const content = pageInstance.getContent();

  if (content) {
    container.appendChild(content);
  } else {
    console.error('Rendered content is null or undefined');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.substring(1) || 'login';
  navigate(path);
});

document.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
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



// import LoginPage from './pages/login-page';
// import RegisterPage from './pages/register-page';
// import ChatPage from './pages/chat-page';


// type PageConstructor = new (props: any) => any;

// const pages: Record<string, PageConstructor> = {
//   login: LoginPage,
//   register: RegisterPage,
//   chat: ChatPage,
// };

// function navigate(page: string) {
//   const PageClass = pages[page];
//   if (!PageClass) {
//     console.error(`Страница ${page} не найдена`);
//     return;
//   }

//   let pageProps = {};
//   if (page === 'chat') {
//     pageProps = {
//       currentChatName: 'Example Chat',
//       chats: [
//         { name: 'Samanta Smith', message: 'Алло, на!', unread: 3, avatar: 'avatar1.png' },
//         { name: 'John Dow 1', message: 'What?', unread: 1, avatar: 'avatar2.png' },
//         { name: 'John Dow 2', message: 'What?', unread: 0 },
//         { name: 'John Dow 3', message: 'What?', unread: 0 },
//         { name: 'John Dow 4', message: 'What?', unread: 2, avatar: 'avatar3.png' },
//         { name: 'John Dow 5', message: 'What?', unread: 1 },
//         { name: 'John Dow 6', message: 'What?', unread: 0 },
//         { name: 'John Dow', message: 'What?', unread: 3 },
//       ],
//     };
//   }

//   const pageInstance = new PageClass(pageProps);
//   const container = document.getElementById('app')!;
//   container.innerHTML = '';
//   const content = pageInstance.getContent();

//   if (content) {
//     container.appendChild(content);
//   } else {
//     console.error('Rendered content is null or undefined');
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const path = window.location.pathname.substring(1) || 'login';
//   navigate(path);
// });

// document.addEventListener('click', e => {
//   const target = e.target as HTMLElement;
//   const page = target.getAttribute('page');
//   if (page) {
//     history.pushState({}, '', `/${page}`);
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });

// window.addEventListener('popstate', () => {
//   const path = window.location.pathname.substring(1) || 'login';
//   navigate(path);
// });

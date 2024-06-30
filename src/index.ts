// import LoginPage from './pages/login-page';
// // import './styles.scss';  // Подключение глобальных стилей, если необходимо

// type PageConstructor = new (props: any) => any;

// const pages: Record<string, PageConstructor> = {
//   'login': LoginPage,
// };

// function navigate(page: string) {
//   const PageClass = pages[page];
//   if (!PageClass) {
//     console.error(`Страница ${page} не найдена`);
//     return;
//   }
  
//   const pageInstance = new PageClass({});
//   const container = document.getElementById('app')!;
//   container.innerHTML = ''; 
//   container.append(pageInstance.getContent()!);
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








// import Handlebars from 'handlebars';
// import * as Components from './components';
// import * as Pages from './pages';
// import { initializeProfilePage, passwordData, profileData } from './pages/profile-page';

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerHelper(name, function (context, options) {
//     const instance = new (component as any)(context);
//     const html = instance.render();
//     return new Handlebars.SafeString(html);
//   });
// });

// const pages: { [key: string]: any } = {
//   // 'chat': Pages.ChatPage,
//   'login': Pages.LoginPage,
//   // 'register': Pages.RegisterPage,
//   // 'profile': { page: Pages.ProfilePage, data: profileData },
//   // 'change': { page: Pages.ChangePage, data: profileData },
//   // 'change-password': { page: Pages.PasswordPage, data: passwordData },
//   // 'error-404': Pages.Error404Page,
//   // 'error-500': Pages.Error500Page
// };

// function navigate(page: string) {
//   const pageConfig = pages[page];
//   let pageInstance;

//   if (typeof pageConfig === 'object' && pageConfig.page) {
//     const { page: PageClass, data } = pageConfig;
//     pageInstance = new PageClass(data);
//   } else if (typeof pageConfig === 'function') {
//     const PageClass = pageConfig;
//     pageInstance = new PageClass();
//   } else {
//     throw new Error(`Page ${page} is not a constructor`);
//   }

//   document.body.innerHTML = '';
//   document.body.appendChild(pageInstance.getContent());

//   if (page === 'profile') {
//     initializeProfilePage();
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const path = window.location.pathname.substring(1) || 'login';
//   navigate(path);
// });

// document.addEventListener('click', e => {
//   const page = (e.target as HTMLElement).getAttribute('page');
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







import Button from './components/button';
import InputComponent from './components/input';
import  {LoginPage}  from './pages';

function renderPage() {
  const button = new Button({
    text: 'Click Me',
    type: 'button',
    className: 'my-button'
  });

  const input = new InputComponent({
    type: 'text',
    className: 'my-input',
    onChange: (value: string) => {
      console.log('Input value:', value);
    }
  });

  const login = new LoginPage();

  const container = document.getElementById('app');
  if (!container) {
    console.error('Container with id "app" not found');
    return;
  }

  container.innerHTML = ''; // Очищаем контейнер перед рендерингом новой страницы
  const buttonContent = button.getContent();
  const inputContent = input.getContent();
  // const loginContent = login.getContent();

  if (buttonContent && inputContent) {
    container.appendChild(inputContent);
    container.appendChild(buttonContent);
    // container.appendChild(loginContent);
  } else {
    console.error('Rendered content is null or undefined');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
});




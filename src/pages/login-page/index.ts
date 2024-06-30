// import './login-page.scss';
// export { default as LoginPage } from './login-page.hbs?raw';


//@ts-nocheck
// import Block from '../../tools/Block';
// import './login-page.scss';
// import LoginPage from './login-page.hbs?raw';

// export default class Login extends Block {
//     constructor(props: any) {
//         super(props);
//     }

//     render() {
//         return `
//           <div class="dialog">
//             <form class="login-page">
//               <div class="login-page__content">
//                 <h1 class="page-title">Вход</h1>
//                 <div class="input-container login-page__input">
//                   <label for="login">Логин:</label>
//                   <input type="text" id="login" name="login" />
//                 </div>
//                 <div class="input-container login-page__input">
//                   <label for="password">Пароль:</label>
//                   <input type="password" id="password" name="password" />
//                 </div>
//               </div>
//               <div class="login-page__footer">
//                 <button type="submit" class="button" page="chat">Авторизоваться</button>
//                 <a href="#" page="register" class="link">Нет аккаунта?</a>
//               </div>
//             </form>
//           </div>
//         `;
//       }
// }


import Block from '../../tools/Block';
import Button from '../../components/button';
import InputComponent from '../../components/input';
import './login-page.scss';

export default class LoginPage extends Block {
  constructor(props: any = {}) {
    super(props);
    this.init();
  }

  init() {
    this.usernameInput = new InputComponent({
      type: 'text',
      className: 'input',
      onChange: (value: string) => {
        console.log('Username:', value);
      },
    });

    this.passwordInput = new InputComponent({
      type: 'password',
      className: 'input',
      onChange: (value: string) => {
        console.log('Password:', value);
      },
    });

    this.submitButton = new Button({
      text: 'Login',
      type: 'submit',
      className: 'login-button',
    });
  }

  render() {
    return `
      <div class="login-page">
        <form class="login-form">
          {{{usernameInput}}}
          {{{passwordInput}}}
          {{{submitButton}}}
        </form>
      </div>
    `;
  }
}





// import Block from '../../tools/Block';
// import Button from '../../components/button';
// import InputComponent from '../../components/input';
// import './login-page.scss';
// import LinkComponent from '../../components/link';

// export default class LoginPage extends Block {
//   constructor(props: any = {}) {
//     super({
//       ...props,
//       usernameInput: new InputComponent({
//         type: 'text',
//         className: 'input',
//         onChange: (value: string) => {
//           console.log('Username:', value);
//         },
//       }),
  
//         passwordInput:  new InputComponent({
//         type: 'password',
//         className: 'input',
//         onChange: (value: string) => {
//           console.log('Password:', value);
//         },
//       }),
  
//       submitButton: new Button({
//         text: 'Авторизоваться',
//         type: 'submit',
//         className: 'login-button',
//       }),
//       registerLink: new LinkComponent({
//         text: 'Register',
//         className: 'register',
//         href: '/register'
//       })
//     });
//     this.init();
//   }

//   render() {
//     return `
//       <div class="login-page">
//         <form class="login-form">
//           {{{usernameInput}}}
//           {{{passwordInput}}}
//           {{{submitButton}}}
//           {{{registerLink}}}
//         </form>
//       </div>
//     `;
//   }
// }



import Block from '../../tools/Block';
import Button from '../../components/button';
import InputComponent from '../../components/input';
import Link from '../../components/link';
import './login-page.scss';

export default class LoginPage extends Block {
  constructor(props: any = {}) {
    super({
      ...props,
      usernameInput: new InputComponent({
        type: 'text',
        className: 'input',
        onChange: (value: string) => {
          console.log('Username:', value);
        },
      }),
      passwordInput: new InputComponent({
        type: 'password',
        className: 'input',
        onChange: (value: string) => {
          console.log('Password:', value);
        },
      }),
      submitButton: new Button({
        text: 'Авторизоваться',
        type: 'submit',
        className: 'login-button',
        // events: {
        //   click: this.handleLoginClick.bind(this)
        // }
        href: '/chat'
      }),
      registerLink: new Link({
        text: 'Регистрация',
        className: 'register-link',
        href: '/register',
      }),
    });
  }

  render() {
    return `
      <div class="login-page">
        <form class="login-form">
          {{{usernameInput}}}
          {{{passwordInput}}}
          {{{submitButton}}}
          {{{registerLink}}}
        </form>
      </div>
    `;
  }
}

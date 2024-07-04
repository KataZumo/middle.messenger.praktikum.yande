import Block from '../../tools/Block';
import Button from '../../components/button';
import InputComponent from '../../components/input';
import Link from '../../components/link';
import './login-page.scss';
import Title from '../../components/title/title';


export default class LoginPage extends Block {
  constructor(props: any = {}) {
    super({
      ...props,
      title: new Title({
        text: 'Вход'
      }),
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
        events: {
          click: (e: any) =>  this.handleLoginClick(e)
        },
      }),
      registerLink: new Link({
        text: 'Нет аккаунта?',
        className: 'register-link',
        href: '/register',
      }),
    });
  }

  handleLoginClick(event: Event) {
    event.preventDefault();
    history.pushState({}, '', '/chat');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    return `
      <div class="login-page">
        {{{title}}}
        <form class="login-form">
          <div class="login_input">
            {{{usernameInput}}}
            {{{passwordInput}}}
          </div>
          <div class="login-form-bottom">
            {{{submitButton}}}
            {{{registerLink}}}
          </div>
        </form>
      </div>
    `;
  }
}

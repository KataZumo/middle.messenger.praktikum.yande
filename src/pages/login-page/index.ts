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
        events: {
          click: (e: any) =>  this.handleLoginClick(e)
        },
      }),
      registerLink: new Link({
        text: 'Регистрация',
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

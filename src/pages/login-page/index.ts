


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
      usernameInput: new InputComponent({
      type: 'text',
      className: 'input',
      onChange: (value: string) => {
        console.log('Username:', value);
      },
    });

      passwordInput:  new InputComponent({
      type: 'password',
      className: 'input',
      onChange: (value: string) => {
        console.log('Password:', value);
      },
    });

    submitButton: new Button({
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


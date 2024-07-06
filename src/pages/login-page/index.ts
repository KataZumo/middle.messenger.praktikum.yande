import Block from "../../tools/Block";
import Button from "../../components/button";
import InputComponent from "../../components/input";
import Link from "../../components/link";
import "./login-page.scss";
import Title from "../../components/title/title";


export function validateLogin(str: string) {
  return new RegExp(/^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/).test(str);
}

export function validatePassword(str: string) {
  return new RegExp(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,40}$/).test(str);
}

export function validateName(str: string) {
  return new RegExp(/^[А-ЯA-Z][-а-яa-zА-ЯA-Z]*(?:[-а-яa-zА-ЯA-Z]+)*$/).test(str);
}

export function validateEmail(str: string) {
  return new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/).test(str);
}

export function validatePhone(str: string) {
  return new RegExp(/^\+?\d{10,15}$/).test(str);
}
interface LoginPageProps {
  title?: Title;
  usernameInput?: InputComponent;
  passwordInput?: InputComponent;
  submitButton?: Button;
  registerLink?: Link;
  [key: string]: unknown;
}
export default class LoginPage extends Block {
  constructor(props: LoginPageProps = {}) {
    super({
      ...props,
      title: new Title({
        text: "Вход",
      }),
      usernameInput: new InputComponent({
        type: "text",
        className: "input",
        onChange: (value: string) => {
          console.log("Username:", value);
        },
      }),
      passwordInput: new InputComponent({
        type: "password",
        className: "input",
        onChange: (value: string) => {
          console.log("Password:", value);
        },
      }),
      submitButton: new Button({
        text: "Авторизоваться",
        type: "submit",
        className: "login-button",
        events: {
          click: (e: unknown) => this.handleLoginClick(e),
        },
      }),
      registerLink: new Link({
        text: "Нет аккаунта?",
        className: "register-link",
        href: "/register",
      }),
    });
  }

  handleLoginClick(event: Event) {
    event.preventDefault();
    history.pushState({}, "", "/chat");
    window.dispatchEvent(new PopStateEvent("popstate"));
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

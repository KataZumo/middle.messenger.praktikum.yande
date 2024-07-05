// import './password-page.scss';
// export { default as PasswordPage } from './password-page.hbs?raw';



import Block from '../../../tools/Block';
import './password-page.scss';
import PasswordPage from './password-page.hbs?raw';
import Title from '../../../components/title/title';
import { Button } from '../../../components';
import ProfilePhotoComponent from '../../../components/photo/ProfilePhotoComponent';

interface ChangePasswordPageProps {
    oldPassword: string;
    newPassword: string;
    repeatPassword: string;
  }
  
  export default class ChangePasswordPage extends Block {
    constructor(props: ChangePasswordPageProps) {
      const profilePhoto = new ProfilePhotoComponent({
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y_CQNi9oiqn96_0204tGgLQuUxigGKLe1w&s',
        onClick: () => '',
      });
      super({
        ...props,
        profilePhoto,
        oldPassword: new Title({
          className: 'password-change',
          text: 'Старый пароль',
        }),
        newPassword: new Title({
          className: 'password-change',
          text: 'Новый пароль',
        }),
        repeatPassword: new Title({
          className: 'password-change',
          text: 'Повторите пароль',
        }),
        saveButton: new Button({
          text: 'Сохранить',
          className: 'save-button',
          events: {
            click: (e: Event) => this.handleSaveClick(e),
          },
        }),
      });
    }
  
    handleSaveClick(event: Event) {
      event.preventDefault();
      history.pushState({}, '', '/profile');
      window.dispatchEvent(new PopStateEvent('popstate'));
      console.log('Пароль изменен');
    }
  
    override render() {
      return `<div class="change-password-page">
      <div class="change-password-page__content">
      {{{profilePhoto}}}
          <div class="change-password-page__item">
            {{{oldPassword}}}
            <input type="password" class="change-password-page__input" />
          </div>
          <div class="change-password-page__item">
            {{{newPassword}}}
            <input type="password" class="change-password-page__input" />
          </div>
          <div class="change-password-page__item">
            {{{repeatPassword}}}
            <input type="password" class="change-password-page__input" />
          </div>
          {{{saveButton}}}
        </div>
      </div>`;
    }
  }

// import './profile-info.scss';
// export { default as ProfileInfo } from './profile-info.hbs?raw';

import Block from '../../tools/Block';
// import './profile-info.scss';
import Title from '../title/title';
import { Link } from '..';
import ModalComponent from '../modal';

interface ProfileChangePageProps {
  name: string;
  email: string;
  loginName: string;
  firstName: string;
  secondName: string;
  chatName: string;
  phone: string;
  photoUrl: string;
}

export default class ProfileInfoChangeComponent extends Block {
  modal: ModalComponent;

  constructor(props: ProfileChangePageProps) {
    const modal = new ModalComponent({
      onApply: () => console.log('File applied'), 
    });

    super({
      ...props,
      emailInfo: new Title({
        className: 'profile-info',
        text: 'Email',
      }),
      login: new Title({
        className: 'profile-info',
        text: 'Login',
      }),
      firstName: new Title({
        className: 'profile-info',
        text: 'First Name',
      }),
      secondName: new Title({
        className: 'profile-info',
        text: 'Second Name',
      }),
      chatName: new Title({
        className: 'profile-info',
        text: 'Chat Name',
      }),
      phone: new Title({
        className: 'profile-info',
        text: 'Phone',
      }),
      profilePhoto: modal,
    });

    this.modal = modal;

    this.setProps({
      onPhotoClick: this.showModal(),
      hideModal:this.hideModal(),
    });
  }

  showModal() {
    this.modal.show();
  }

  hideModal() {
    this.modal.hide();
  }

  override render() {
    return `<div class="profile-info">
      <div class="profile-info__photo-container" onclick="{{onPhotoClick}}">
        <img src="{{photoUrl}}" alt="Profile Photo" class="profile-info__photo" />
      </div>
      {{{profilePhoto}}}
      <h1 class="profile-info__name">{{name}}</h1>
      <div class="profile-info__item">
        <span class="profile-info__label">Имейл:</span>
        {{{emailInfo}}}
        <span class="profile-info__value">{{email}}</span>
      </div>
      <div class="profile-info__item">
        <span class="profile-info__label">Логин:</span>
        {{{login}}}
        <span class="profile-info__value">{{loginName}}</span>
      </div>
      <div class="profile-info__item">
        <span class="profile-info__label">Имя:</span>
        {{{firstName}}}
        <span class="profile-info__value">{{firstName}}</span>
      </div>
      <div class="profile-info__item">
        <span class="profile-info__label">Фамилия:</span>
        {{{secondName}}}
        <span class="profile-info__value">{{secondName}}</span>
      </div>
      <div class="profile-info__item">
        <span class="profile-info__label">Имя в чате:</span>
        {{{chatName}}}
        <span class="profile-info__value">{{chatName}}</span>
      </div>
      <div class="profile-info__item">
        <span class="profile-info__label">Номер телефона:</span>
        {{{phone}}}
        <span class="profile-info__value">{{phone}}</span>
      </div>
    </div>`;
  }
}

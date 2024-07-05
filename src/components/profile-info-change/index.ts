// import './profile-info.scss';
// export { default as ProfileInfo } from './profile-info.hbs?raw';

import Block from '../../tools/Block';
import Title from '../title/title';
import { Link } from '..';
import ModalComponent from '../modal';
import ProfilePhotoComponent from '../photo/ProfilePhotoComponent';

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
    const profilePhoto = new ProfilePhotoComponent({
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y_CQNi9oiqn96_0204tGgLQuUxigGKLe1w&s',
      onClick: () => modal.show(),
    });

    super({
      ...props,
      modal: modal,
      profilePhoto,
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
    });

    this.modal = modal;
  }

  override render() {
    return `<div class="profile-info">
      <div class="profile-info__photo-container" onclick="{{onPhotoClick}}">
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
       {{{modal}}}
    </div>`;
  }
}

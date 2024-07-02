// import './profile-info.scss';
// export { default as ProfileInfo } from './profile-info.hbs?raw';


import Block from '../../tools/Block';
import './profile-info.scss';
import ProfileInfo  from './profile-info.hbs?raw';
import Title from '../title/title';
import Button from '../button';
import { Link } from '..';
import ProfilePhotoComponent from '../photo/ProfilePhotoComponent';
import ModalComponent from '../modal';


// interface ProfilePageProps {
//   name: string;
//   email: string;
//   loginName: string;
//   firstName: string;
//   secondName: string;
//   chatName: string;
//   phone: string;
//   photoUrl: string;
// }

// export default class ProfileInfoComponent extends Block {
//     constructor(props: ProfilePageProps) {
//       const profilePhoto = new ProfilePhotoComponent({
//         photoUrl: props.photoUrl,
//         onClick: () => console.log('Change photo clicked'),
//       });
//     super({
//       ...props,
//       emailInfo: new Title({
//         className: 'profile-info',
//         text: 'Email',
//       }),
//       login: new Title({
//         className: 'profile-info',
//         text: 'Login',
//       }),
//       firstName: new Title({
//         className: 'profile-info',
//         text: 'First Name',
//       }),
//       secondName: new Title({
//         className: 'profile-info',
//         text: 'Second Name',
//       }),
//       chatName: new Title({
//         className: 'profile-info',
//         text: 'Chat Name',
//       }),
//       phone: new Title({
//         className: 'profile-info',
//         text: 'Phone',
//       }),
//       profilePhoto,
//       changeData:  new Link({
//         text: 'Изменить данные',
//         href: '/change-data',
//         className: 'chat-page__profile-link'
//       }),
//       changePassword: new Link({
//         text: 'Изменить пароль',
//         href: '/change-password',
//         className: 'chat-page__profile-link'
//       }),
//       exitLink: new Link({
//         text: 'Выйти',
//         href: '/login',
//         className: 'chat-page__profile-link'
//       }),
//     });
//   }

//   render() {
//     return `<div class="profile-info">
//       {{{profilePhoto}}}
//       <h1 class="profile-info__name">{{name}}</h1>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Имейл:</span>
//         {{{emailInfo}}}
//         <span class="profile-info__value">{{email}}</span>
//       </div>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Логин:</span>
//         {{{login}}}
//         <span class="profile-info__value">{{loginName}}</span>
//       </div>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Имя:</span>
//         {{{firstName}}}
//         <span class="profile-info__value">{{firstName}}</span>
//       </div>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Фамилия:</span>
//         {{{secondName}}}
//         <span class="profile-info__value">{{secondName}}</span>
//       </div>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Имя в чате:</span>
//         {{{chatName}}}
//         <span class="profile-info__value">{{chatName}}</span>
//       </div>
//       <div class="profile-info__item">
//         <span class="profile-info__label">Номер телефона:</span>
//         {{{phone}}}
//         <span class="profile-info__value">{{phone}}</span>
//       </div>
//       {{{changeData}}}
//       {{{changePassword}}}
//       {{{exitLink}}}
//     </div>`;
//   }
// }



interface ProfilePageProps {
  name: string;
  email: string;
  loginName: string;
  firstName: string;
  secondName: string;
  chatName: string;
  phone: string;
  photoUrl: string;
}

export default class ProfileInfoComponent extends Block {
  modal: ModalComponent;

  constructor(props: ProfilePageProps) {
    const modal = new ModalComponent({
      onApply: () => console.log('File applied'), // Замените на реальный обработчик
    });

    super({
      ...props,
      modal,
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
      changeData: new Link({
        text: 'Изменить данные',
        href: '/change-data',
        className: 'chat-page__profile-link',
      }),
      changePassword: new Link({
        text: 'Изменить пароль',
        href: '/change-password',
        className: 'chat-page__profile-link',
      }),
      exitLink: new Link({
        text: 'Выйти',
        href: '/login',
        className: 'chat-page__profile-link',
      }),
    });

    this.modal = modal;
    this.setProps({
      onPhotoClick: () => this.showModal(),
      });
  }

  showModal() {
    this.modal.show();
  }

  override render() {
    return `<div class="profile-info">
      {{{modal}}}
      <img src="{{photoUrl}}" alt="Profile Photo" class="profile-info__photo" onclick="{{onPhotoClick}}" />
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
      {{{changeData}}}
      {{{changePassword}}}
      {{{exitLink}}}
    </div>`;
  }
}

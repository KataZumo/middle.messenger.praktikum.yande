// import Handlebars from 'handlebars';
// import './profile-page.scss';
// import Modal  from '../../components/modal';
// export { default as ProfilePage } from './profile-page.hbs?raw';

// const profileData = {
//     name: 'Гроги',
//     email: 'test@example.com',
//     login_name: 'login',
//     first_name: 'Гроги',
//     second_name: 'Григорьевич',
//     chat_name: 'QWERTY',
//     phone: '+1 234 567 890'
//   };
//   export { profileData };

//   const passwordData = {
//     oldPassword: '*******',
//     password: '*******',
//     repitPassword: '*******',



import ProfileInfoComponent from "../../components/profile-info";
import Block from "../../tools/Block";
import './profile-page.scss';
export default class ProfilePage extends Block {
  constructor(props: any) {
    super({
      ...props,
      profile: new ProfileInfoComponent({
        name: props.name,
        email: props.email,
        loginName: props.loginName,
        firstName: props.firstName,
        secondName: props.secondName,
        chatName: props.chatName,
        phone: props.phone,
        photoUrl: props.photoUrl,
      }),
    });
  }

  override render() {
    return `<div class="profile-page">
      <div class="profile-page__content">
        {{{profile}}}
      </div>
      <div class="profile-page__left">
        <div class="profile-page__nav-btn" page="chat">Назад</div>
      </div>
    </div>`;
  }
}


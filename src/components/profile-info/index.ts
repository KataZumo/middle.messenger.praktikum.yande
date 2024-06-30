// import './profile-info.scss';
// export { default as ProfileInfo } from './profile-info.hbs?raw';


import Block from '../../tools/Block';
import './profile-info.scss';
import ProfileInfo  from './profile-info.hbs?raw';


export default class ProfileInfoComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<div class="profile-info">
  <h1 class="profile-info__name">{{name}}</h1>
  <div class="profile-info__item">
    <span class="profile-info__label">Имейл:</span>
    <span class="profile-info__value">{{email}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Логин:</span>
    <span class="profile-info__value">{{login_name}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Имя:</span>
    <span class="profile-info__value">{{first_name}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Фамилия:</span>
    <span class="profile-info__value">{{second_name}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Имя в чате:</span>
    <span class="profile-info__value">{{chat_name}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Номер телефона:</span>
    <span class="profile-info__value">{{phone}}</span>
  </div>
</div>


`
    }
}

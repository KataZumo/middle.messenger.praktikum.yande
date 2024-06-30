// import './password-info.scss';
// export { default as PasswordInfo } from './password-info.hbs?raw';

import Block from '../../tools/Block';
import './password-info.scss';
import PasswordInfo from './password-info.hbs?raw';


export default class PasswordInfoComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<div class="profile-info">
  <div class="profile-info__item">
    <span class="profile-info__label">Старый пароль:</span>
    <span class="profile-info__value">{{oldPassword}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Новый пароль:</span>
    <span class="profile-info__value">{{password}}</span>
  </div>
  <div class="profile-info__item">
    <span class="profile-info__label">Повторите новый пароль:</span>
    <span class="profile-info__value">{{repitPassword}}</span>
  </div>
</div>


`
    }
}

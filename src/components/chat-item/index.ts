// import './chat-item.scss';
// export { default as ChatItem } from './chat-item.hbs?raw';

import Block from "../../tools/Block";
import "./chat-item.scss";

export default class ChatItemComponent extends Block {
  constructor(props: any) {
    super({...props});
  }

//   render() {
//     return `<div class="chat-item">
//   <div class="chat-item__line"></div>
//   <div class="chat-item__block{{#if current}} chat-item__block--current{{/if}}">
//     {{#if avatar}}
//     <div>
//       <img class="chat-item__avatar" alt="Users Photos" src={{ avatar }}><img>
//     </div>
//     {{else }}
//     <div class="chat-item__avatar"></div>
//     {{/if}}
//     <div class="chat-item__message"><span class="chat-item__message-text">{{ message }}</span></div>
//   </div>
// </div>
// `;
//   }

render() {
  return `
  <div>
    <div>{{ name }}</div>
    <div>{{ message }}</div>
  </div>`;
}
}

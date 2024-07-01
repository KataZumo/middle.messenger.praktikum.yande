// import './chat-item.scss';
// export { default as ChatItem } from './chat-item.hbs?raw';

// import Block from "../../tools/Block";
// import "./chat-item.scss";

// export default class ChatItemComponent extends Block {
//   constructor(props: any) {
//     super({...props});
//   }

// render() {
//   return `
//   <div>
//     <div>{{ name }}</div>
//     <div>{{ message }}</div>
//   </div>`;
// }
// }


import Block from '../../tools/Block';
import './chat-item.scss';

interface ChatItemProps {
  avatar?: string;
  message: string;
  current?: boolean;
  name?: string;
  unread?: number;
}

export default class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    return `
      <div class="chat-item">
        <div class="chat-item__avatar">
          {{#if avatar}}
            <img src="{{avatar}}" alt="Avatar">
          {{else}}
            <div class="chat-item__avatar-placeholder"></div>
          {{/if}}
        </div>
        <div class="chat-item__details">
          <div class="chat-item__name">{{name}}</div>
          <div class="chat-item__message">{{message}}</div>
          {{#if unread}}
            <div class="chat-item__unread">{{unread}}</div>
          {{/if}}
        </div>
      </div>
    `;
  }
}

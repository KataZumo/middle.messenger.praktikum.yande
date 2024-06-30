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
}

export default class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    return `
      <div class="chat-item">
        <div class="chat-item__line"></div>
        <div class="chat-item__block{{#if current}} chat-item__block--current{{/if}}">
          {{avatar}}
          <div>
            <img class="chat-item__avatar" alt="User's Photos" src="{{ avatar }}">
          </div>
          {{else}}
          <div class="chat-item__avatar"></div>
          {{/if}}
          <div class="chat-item__message">
            <span class="chat-item__message-text">{{ message }}</span>
          </div>
        </div>
      </div>
    `;
  }
}

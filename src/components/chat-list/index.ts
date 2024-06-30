// import './chat-list.scss';
// export { default as ChatList } from './chat-list.hbs?raw';

import Block from '../../tools/Block';
import './chat-list.scss';

interface ChatListProps {
  className?: string;
  chats: Array<{ name: string, message: string, unread: number, avatar?: string }>;
}

export default class ChatList extends Block {
  constructor(props: ChatListProps) {
    super(props);
  }

  render() {
    return `
      <div class="chat-list{{#if className}} {{className}}{{/if}}">
        {{#each chats}}
          {{{this}}}
        {{/each}}
      </div>
    `;
  }
}


// import './chat-list.scss';
// export { default as ChatList } from './chat-list.hbs?raw';

import "./chat-list.scss";
import ChatList from "./chat-list.hbs?raw";
import Block from "../../tools/Block";

export default class ChatListComponent extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return `<div class="chat-list{{#if className}} {{ className }}{{/if}}">
  {{> @partial-block }}
</div>`;
  }
}

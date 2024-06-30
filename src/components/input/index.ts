// import './input.scss';
// export { default as Input } from './input.hbs?raw';

import Block from "../../tools/Block";
import "./input.scss";


interface InputProps {
  type: string;
  className?: string;
  events?: {
    change?: (event: Event) => void;
    blur?: (event: Event) => void;
  };
  onChange: (value: string) => void;
}

export default class InputComponent extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        change: (e: Event) => props.onChange((e.target as HTMLInputElement).value),
        blur: (e: Event) => this.validate(),
      },
    });
  }

  render() {
    return `<input type="{{type}}" class="{{className}}" />`;
  }

  validate() {
    console.log('Here we call validation code on blur');
  }
}

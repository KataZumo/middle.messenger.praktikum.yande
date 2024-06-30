import Block from '../../tools/Block';
import './button.scss';

interface ButtonProps {
  text: string;
  type?: string;
  className?: string;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return `
      <button type="{{type}}" class="{{className}}">{{text}}</button>
    `;
  }
}

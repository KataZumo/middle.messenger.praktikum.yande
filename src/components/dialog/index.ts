// import './dialog.scss';
// export { default as Dialog } from './dialog.hbs?raw';



import Block from '../../tools/Block';
import './dialog.scss';

interface DialogProps {
  // add any necessary props
}

export default class Dialog extends Block {
  constructor(props: DialogProps) {
    super(props);
  }

  render() {
    return `
      <div class="dialog">
        {{> @partial-block }}
      </div>
    `;
  }
}


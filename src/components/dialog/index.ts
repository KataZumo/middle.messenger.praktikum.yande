// import './dialog.scss';
// export { default as Dialog } from './dialog.hbs?raw';



import Block from '../../tools/Block';
import './dialog.scss';
import Dialog from './dialog.hbs?raw';
export default class DialogComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<div class="dialog">
  {{> @partial-block }}
</div>`
    }
}

// import './input-field.scss';
// export { default as InputField } from './input-field.hbs?raw';


import Block from '../../tools/Block';
import './input-field.scss';
import  InputField  from './input-field.hbs?raw';


export default class InputFieldComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<div class="input-field{{#if className}} {{ className }}{{/if}}">
  <div class="input-field__title">{{ title }}</div>
  {{> Input className="input-field__element" type=type title=title name=name }}
</div>
`
    }
}

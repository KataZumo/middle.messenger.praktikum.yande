// import './link.scss';
// export { default as Link } from './link.hbs?raw';


import './link.scss';
import Link from './link.hbs?raw';
import Block from '../../tools/Block';


export default class LinkComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<a href="{{ url }}" class="link{{#if className}} {{className}}{{/if}}" page="{{ page }}">{{ text }}</a>`
    }
}

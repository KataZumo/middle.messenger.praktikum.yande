import Block from "../../tools/Block";
import "./title.scss";

export default class Title extends Block {
    constructor(props: any) {
        super({
            ...props,
        });
    }
    render() {
        return `<span class="subtitle {{className}}">{{text}}</span>`;
    }
}

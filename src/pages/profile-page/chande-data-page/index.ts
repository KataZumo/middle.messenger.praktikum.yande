// import './chande-data-page.scss';
// export { default as ChangePage } from './chande-data-page.hbs?raw';



import './chande-data-page.scss';
import ChangePage from './chande-data-page.hbs?raw';
import Block from '../../../tools/Block';

export default class ChangeDataPage extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return ChangePage
    }
}

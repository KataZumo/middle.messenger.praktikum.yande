// import './password-page.scss';
// export { default as PasswordPage } from './password-page.hbs?raw';



import Block from '../../../tools/Block';
import './password-page.scss';
import PasswordPage from './password-page.hbs?raw';

export default class PasswordPageData extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return PasswordPage
    }
}

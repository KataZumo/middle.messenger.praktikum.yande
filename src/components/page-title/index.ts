// import './page-title.scss';
// export { default as PageTitle } from './page-title.hbs?raw';



import Block from "../../tools/Block";
import "./page-title.scss";
export default class PageTitleComponent extends Block {
  constructor(props: any) {
    super({ ...props });
  }

  render() {
    return `<h1 class="page-title">
  {{ title }}
</h1>
`;
  }
}

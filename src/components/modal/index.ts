// import './modal.scss';
// export { default as Modal } from './modal.hbs?raw';




import Block from '../../tools/Block';
import './modal.scss';
import Modal from './modal.hbs?raw';

export default class ModalComponent extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return `<div class="modal">
  <div class="modal__content">
    <h2 class="modal__title">Загрузить файл</h2>
    <label class="modal__label" for="file-input" id="file-label">Выбрать файл на компьютере</label>
    <input type="file" id="file-input" class="modal__input">
    {{> Button class="modal__apply-button" text="Применить" page="chat" }}
    <p class="modal__status-message" id="status-message"></p>
  </div>
</div>

`
    }
}

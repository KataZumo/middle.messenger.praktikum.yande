// import './modal.scss';
// export { default as Modal } from './modal.hbs?raw';




import Block from '../../tools/Block';
import './modal.scss';
import Modal from './modal.hbs?raw';

// export default class ModalComponent extends Block {
//   constructor(props: any) {
//     super(props);
//   }

//   override render() {
//     return `<div class="modal" style="display: none;">
//       <div class="modal__content">
//         <span class="modal__close-button" onclick="{{hide}}">&times;</span>
//         <h2 class="modal__title">Загрузить файл</h2>
//         <label class="modal__label" for="file-input" id="file-label">Выбрать файл на компьютере</label>
//         <input type="file" id="file-input" class="modal__input">
//         <button class="modal__apply-button">Применить</button>
//         <p class="modal__status-message" id="status-message"></p>
//       </div>
//     </div>`;
//   }
// }



export default class ModalComponent extends Block {
  constructor(props: any) {
    super({
      ...props,
      events: {
        click: (event: Event) => this.handleClick(event),
      },
    });
  }

  handleClick(event: Event) {
    if ((event.target as HTMLElement).classList.contains('modal__close-button')) {
      console.log('click')
      this.hide();
    }
  }

  override render() {
    return `<div class="modal" style="display: none;">
      <div class="modal__content">
        <span class="modal__close-button">&times;</span>
        <h2 class="modal__title">Загрузить файл</h2>
        <label class="modal__label" for="file-input" id="file-label">Выбрать файл на компьютере</label>
        <input type="file" id="file-input" class="modal__input">
        <button class="modal__apply-button">Применить</button>
        <p class="modal__status-message" id="status-message"></p>
      </div>
    </div>`;
  }
}

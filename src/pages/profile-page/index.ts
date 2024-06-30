import Handlebars from 'handlebars';
import './profile-page.scss';
import Modal  from '../../components/modal';
export { default as ProfilePage } from './profile-page.hbs?raw';

const profileData = {
    name: 'Гроги',
    email: 'test@example.com',
    login_name: 'login',
    first_name: 'Гроги',
    second_name: 'Григорьевич',
    chat_name: 'QWERTY',
    phone: '+1 234 567 890'
  };
  export { profileData };

  const passwordData = {
    oldPassword: '*******',
    password: '*******',
    repitPassword: '*******',

  };
  export { passwordData };


  function initializeProfilePage() {
    const profilePhoto = document.getElementById('profile-photo') as any;
    const modalContainer = document.getElementById('modal-container') as any;
  
    profilePhoto.addEventListener('click', () => {
      const template = Handlebars.compile(Modal);
      modalContainer.innerHTML = template();
  
      const fileInput = document.getElementById('file-input');
      const statusMessage = document.getElementById('status-message');
      const fileLabel = document.getElementById('file-label');
      const applyButton = document.querySelector('.modal__apply-button');
  
      let fileSelected = false;
  
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          fileSelected = true;
          fileLabel.textContent = 'Файл загружен';
          statusMessage.textContent = '';
        }
      });
  
      applyButton.addEventListener('click', () => {
        if (!fileSelected) {
          statusMessage.textContent = 'Нужно выбрать файл';
          statusMessage.classList.add('modal__status-message--error');
        } else {
          // Симулируем загрузку файла
          const isError = Math.random() < 0.3; // 30% вероятность ошибки
          if (isError) {
            statusMessage.textContent = 'Ошибка, попробуйте еще раз';
            statusMessage.classList.add('modal__status-message--error');
          } else {
            statusMessage.textContent = 'Файл успешно загружен';
            statusMessage.classList.remove('modal__status-message--error');
            statusMessage.classList.add('modal__status-message--success');
            setTimeout(() => {
              modalContainer.innerHTML = '';
            }, 1000); // Закрываем модальное окно через 1 секунду
          }
        }
      });
  
      const closeModal = () => {
        modalContainer.innerHTML = '';
      };
  
      modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
          closeModal();
        }
      });
    });
  }
  
  export { initializeProfilePage };

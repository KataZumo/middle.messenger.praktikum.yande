// export function initializeRegisterForm() {
//     document.addEventListener('DOMContentLoaded', () => {
//       const registerForm = document.querySelector('#register-form');
//       if (registerForm) {
//         registerForm.addEventListener('submit', (event) => {
//           event.preventDefault();
//           console.log('Register form submitted');
//         });
//       }
//     });
//   }
//   initializeRegisterForm();
  
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.register-page');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Register form submitted');
    });
  }
});

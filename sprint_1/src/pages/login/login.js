document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-page');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Login form submitted');
    });
  }
});

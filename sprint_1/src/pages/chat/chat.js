document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.querySelector('#chat-input');
  if (chatInput) {
    chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        console.log('Chat message sent');
      }
    });
  }
});

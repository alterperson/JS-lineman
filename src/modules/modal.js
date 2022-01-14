const modal = () => {
  const modal = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const callbackBtn = document.querySelectorAll('.callback-btn');

  callbackBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      modalOverlay.style.display = 'block';
    });
  });
};

export default modal;

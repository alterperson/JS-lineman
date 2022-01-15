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

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-overlay') || event.target.closest('.modal-close')) {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }
  });
};

export default modal;

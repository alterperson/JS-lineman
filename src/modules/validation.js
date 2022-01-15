const validation = () => {
  const form = document.querySelector('form');
  const formElements = form.querySelectorAll('input');

  const regName = /[^а-яё ]/gi;
  const regTel = /\D+/gi;

  formElements.forEach((input) => {
    input.addEventListener('input', (event) => {
      if (input.name == 'fio') {
        event.target.value = event.target.value.replace(regName, '');
      }

      if (input.name == 'tel') {
        event.target.value = event.target.value.replace(regTel, '');
      }
    });
  });
};

export default validation;

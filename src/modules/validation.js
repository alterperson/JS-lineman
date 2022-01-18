const validation = () => {
  const form = document.querySelector('form');
  const formElements = form.querySelectorAll('input');
  const inputFio = document.querySelector('input[name=fio]');
  const inputTel = document.querySelector('input[name=tel]');

  const regName = /[^[а-яА-ЯёЁ ]*/g;
  const regTel = /[^[0-9+]*/g;

  const requireInputs = () => {
    formElements.forEach((input) => {
      input.setAttribute('required', true);
    });
  };

  const checkLength = (value) => {
    if (event.target.value.length < value) {
      event.target.setCustomValidity(`Пожалуйста введите не менее ${value} символов`);
    } else {
      event.target.setCustomValidity('');
    }
  };

  formElements.forEach((input) => {
    input.addEventListener('input', (event) => {
      if (input.name == 'fio') {
        event.target.value = event.target.value.charAt(0).toUpperCase() + event.target.value.substr(1);
        event.target.value = event.target.value.replace(/^\s+|\s+$/g, '');
        event.target.value = event.target.value.replace(regName, '');
      }

      if (input.name == 'tel') {
        event.target.value = event.target.value.replace(regTel, '');
      }
    });
  });

  requireInputs();

  inputFio.addEventListener('input', (event) => {
    checkLength(2);
  });

  inputTel.addEventListener('input', (event) => {
    checkLength(6);
  });
};

export default validation;

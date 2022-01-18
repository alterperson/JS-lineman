const sendForm = () => {
  const modal = document.querySelector('.modal-callback');
  const modalOverlay = document.querySelector('.modal-overlay');
  const form = document.querySelector('form');
  const formElements = form.querySelectorAll('input');
  const statusBlock = document.createElement('div');
  const loadText = 'Отправляем...';
  const errorText = 'Ошибка...';
  const successText = 'Форма успешно отправлена!';

  statusBlock.style.color = '#000000';

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData(formBody)
      .then((data) => {
        statusBlock.textContent = successText;

        setTimeout(() => {
          modal.style.display = 'none';
          modalOverlay.style.display = 'none';
          statusBlock.textContent = '';
        }, 2000);

        formElements.forEach((input) => {
          if (input.type !== 'submit') {
            input.value = '';
          }
        });
      })
      .catch((error) => {
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error('Неверно указана форма');
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;

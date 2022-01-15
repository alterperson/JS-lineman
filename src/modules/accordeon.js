const accordeon = () => {
  const accordeon = document.querySelector('.accordeon');
  const elements = accordeon.querySelectorAll('.element');
  const elementContent = accordeon.querySelectorAll('.element-content');

  const toggleAccordeon = (index) => {
    for (let i = 0; i < elements.length; i++) {
      if (index === i) {
        elements[i].classList.add('active');
        elementContent[i].style.display = 'block';
      } else {
        elements[i].classList.remove('active');
        elementContent[i].style.display = 'none';
      }
    }
  };

  elements.forEach((element, index) => {
    element.addEventListener('click', () => {
      toggleAccordeon(index);
    });
  });
};

export default accordeon;

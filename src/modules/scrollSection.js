const scrollSection = () => {
  const menu = document.querySelectorAll('.top-menu a');

  menu.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href');
      window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: 'smooth',
      });
    });
  });
};

export default scrollSection;

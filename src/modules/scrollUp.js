const scrollUp = () => {
  const arrowUp = document.querySelector('.up');
  const servicesSection = document.querySelector('.services-section');
  const offsetTop = servicesSection.offsetTop;

  arrowUp.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.pageYOffset >= offsetTop) {
      arrowUp.style.display = 'block';
    } else {
      arrowUp.style.display = 'none';
    }
  });

  arrowUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

export default scrollUp;

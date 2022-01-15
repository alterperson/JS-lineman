const ourServices = () => {
  const arrowRight = document.querySelector('.arrow-right');
  const arrowLeft = document.querySelector('.arrow-left');
  const servicesCarousel = document.querySelector('.services-carousel');
  const slide = servicesCarousel.getElementsByClassName('slide-carousel');
  const servicesArrow = document.querySelector('.services-arrow');

  for (let currentServices = 3; currentServices < 6; currentServices++) {
    slide[currentServices].style.display = 'none';
  }

  servicesArrow.addEventListener('click', (event) => {
    if (event.target === arrowRight) {
      slide[0].style.display = 'none';
      servicesCarousel.append(slide[0]);
      slide[2].style.display = 'flex';
    } else if (event.target == arrowLeft) {
      slide[2].style.display = 'none';
      servicesCarousel.prepend(slide[5]);
      slide[0].style.display = 'flex';
    }
  });
};

export default ourServices;

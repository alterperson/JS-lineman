const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slides = slider.querySelectorAll('.item');
  const table = document.querySelectorAll('.table');

  let currentSlide = 0;
  let interval;

  table.forEach((item) => {
    item.style.visibility = 'visible';
    item.style.opacity = '1';
  });

  const prevSlide = (item, index, className) => {
    item[index].classList.remove(className);
  };

  const nextSlide = (item, index, className) => {
    item[index].classList.add(className);
  };

  const autoPlay = () => {
    slides[currentSlide].classList.remove('animated');
    slides[currentSlide].style.display = 'none';
    prevSlide(slides, currentSlide, 'fadeIn');

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].classList.add('animated');
    slides[currentSlide].style.display = 'block';
    nextSlide(slides, currentSlide, 'fadeIn');
  };

  const startSlide = (time) => {
    interval = setInterval(autoPlay, time);
  };
  startSlide(3000);
};

export default topSlider;

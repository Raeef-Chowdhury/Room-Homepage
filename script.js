const slides = document.querySelectorAll(".slide");
const slideshow = document.querySelector(".slideshow");
const btnLeft = document.querySelectorAll(".img__slider--left");
const btnRight = document.querySelectorAll(".img__slider--right");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = (slide) => {
  slideshow.style.transform = `translateX(-${100 * slide}vw)`;
};

// Initialize to show first slide
goToSlide(curSlide);

const prevSlide = () => {
  curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
  goToSlide(curSlide);
};

const nextSlide = () => {
  curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
  goToSlide(curSlide);
};

// Attach event listeners to navigation buttons
btnLeft.forEach((btn) => btn.addEventListener("click", prevSlide));
btnRight.forEach((btn) => btn.addEventListener("click", nextSlide));

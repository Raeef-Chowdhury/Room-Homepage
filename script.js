const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelectorAll(".img__slider--left");
const btnRight = document.querySelectorAll(".img__slider--right");
console.log(btnLeft);

console.log(slides);

let curSlide = 0;
const maxSlide = slides.length;
const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`; // Arrange slides horizontally
  });
};
goToSlide(curSlide);
const prevSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};
const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};
btnLeft.forEach((btn) => btn.addEventListener("click", prevSlide));
btnRight.forEach((btn) => btn.addEventListener("click", nextSlide));
console.log(btnLeft);

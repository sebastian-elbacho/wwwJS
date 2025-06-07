const sliderTrack = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let index = 0;

function showSlide() {
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}


btnLeft.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
});

btnRight.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide();
});


setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 3000); 




const form = document.getElementById('contact__form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Dziękujemy za wiadomość!');
  form.reset();
});

// Obsługa QA

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  if (answer.classList.contains('qa__answer--show')) {
    answer.classList.remove('qa__answer--show')
  } else {
    answer.classList.add('qa__answer--show')
  }
}

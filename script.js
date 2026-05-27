// script.js
// Add smooth reveal animation for the custom sections.

const revealItems = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const viewportHeight = window.innerHeight;
  revealItems.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < viewportHeight - 80) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
    if (formSuccess) {
      formSuccess.style.display = 'block';
      setTimeout(() => {
        formSuccess.style.display = 'none';
      }, 4500);
    }
  });
}

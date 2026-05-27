// script.js
// Small scroll reveal helper for the services preview section.

const revealSections = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;
  revealSections.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerPoint) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);

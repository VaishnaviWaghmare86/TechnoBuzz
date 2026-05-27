// JavaScript for the TechnoBuzz Solutions homepage
// This script handles mobile menu toggle and smooth scroll behavior.

const menuButton = document.querySelector('[data-menu-button]');
const navMenu = document.querySelector('[data-menu]');
const navLinks = document.querySelectorAll('nav a');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', navMenu.classList.contains('open'));
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

// Simple scroll reveal effect for page sections
const revealElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

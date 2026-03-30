// Modern IT Company Website JavaScript
// ES6+ Features and Smooth Interactions

class ModernWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupFormValidation();
        this.setupAnimations();
        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupCounterAnimation();
        this.setupParticleEffects();
        this.setupScrollProgress();
        this.setupTestimonialCarousel();
    }

    // Smooth Scrolling for Navigation Links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Enhanced Form Validation
    setupFormValidation() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(contactForm);
            });

            // Real-time validation
            const inputs = contactForm.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        }
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error
        this.clearFieldError(field);

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value && !this.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        } else if (field.type === 'tel' && value && !this.isValidPhone(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid 10-digit phone number';
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    async handleFormSubmission(form) {
        const formData = new FormData(form);
        const submitBtn = form.querySelector('button[type="submit"]');
        const formStatus = document.getElementById('formStatus');
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        formStatus.textContent = '';

        try {
            // Simulate API call (replace with actual endpoint)
            await this.simulateApiCall(formData);
            
            // Success message
            formStatus.textContent = 'Message sent successfully! We\'ll get back to you soon.';
            formStatus.style.color = '#27ae60';
            form.reset();
        } catch (error) {
            // Error message
            formStatus.textContent = 'Oops! Something went wrong. Please try again.';
            formStatus.style.color = '#e74c3c';
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i>Send Message';
        }
    }

    simulateApiCall(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Network error'));
                }
            }, 2000);
        });
    }

    // Scroll-based Animations
    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.service-card, .info-card, .stat-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Scroll Effects
    setupScrollEffects() {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Header hide/show on scroll
            if (header) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Mobile Menu Toggle
    setupMobileMenu() {
        const menuToggle = document.querySelector('.fa-bars');
        const navbar = document.querySelector('.navbar');

        if (menuToggle && navbar) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('fa-times');
                navbar.classList.toggle('nav-toggle');
            });

            // Close menu on link click
            navbar.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('fa-times');
                    navbar.classList.remove('nav-toggle');
                });
            });
        }
    }

    // Counter Animation
    setupCounterAnimation() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        const animateCounter = (counter) => {
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // Particle Effects for Hero Section
    setupParticleEffects() {
        const particlesContainer = document.querySelector('.floating-particles');
        if (!particlesContainer) return;

        // Create additional particles dynamically
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Scroll Progress Indicator
    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Testimonial Carousel
    setupTestimonialCarousel() {
        this.currentTestimonial = 0;
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        
        if (this.testimonials.length === 0) return;
        
        // Auto-rotate testimonials
        this.startTestimonialRotation();
    }

    changeTestimonial(direction) {
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        
        if (this.testimonials.length === 0) return;
        
        // Hide current testimonial
        this.testimonials[this.currentTestimonial].classList.remove('active');
        this.dots[this.currentTestimonial].classList.remove('active');
        
        // Calculate new index
        this.currentTestimonial += direction;
        if (this.currentTestimonial >= this.testimonials.length) {
            this.currentTestimonial = 0;
        } else if (this.currentTestimonial < 0) {
            this.currentTestimonial = this.testimonials.length - 1;
        }
        
        // Show new testimonial
        this.testimonials[this.currentTestimonial].classList.add('active');
        this.dots[this.currentTestimonial].classList.add('active');
        
        // Reset auto-rotation
        this.resetTestimonialRotation();
    }

    goToTestimonial(index) {
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.dot');
        
        if (this.testimonials.length === 0) return;
        
        // Hide current testimonial
        this.testimonials[this.currentTestimonial].classList.remove('active');
        this.dots[this.currentTestimonial].classList.remove('active');
        
        // Show selected testimonial
        this.currentTestimonial = index;
        this.testimonials[this.currentTestimonial].classList.add('active');
        this.dots[this.currentTestimonial].classList.add('active');
        
        // Reset auto-rotation
        this.resetTestimonialRotation();
    }

    startTestimonialRotation() {
        this.testimonialInterval = setInterval(() => {
            this.changeTestimonial(1);
        }, 5000);
    }

    resetTestimonialRotation() {
        if (this.testimonialInterval) {
            clearInterval(this.testimonialInterval);
        }
        this.startTestimonialRotation();
    }

    // Typing Effect for Hero Title
    setupTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid white';

        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            } else {
                heroTitle.style.borderRight = 'none';
            }
        };

        setTimeout(typeWriter, 500);
    }

    // Parallax Effect
    setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-content, .particle');
            
            parallaxElements.forEach((element, index) => {
                const speed = index * 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new ModernWebsite();
    
    // Additional initialization
    website.setupTypingEffect();
    website.setupParallaxEffect();
    
    // Make website instance globally available for testimonial controls
    window.websiteInstance = website;
});

// Global functions for testimonial controls
function changeTestimonial(direction) {
    if (window.websiteInstance) {
        window.websiteInstance.changeTestimonial(direction);
    }
}

function goToTestimonial(index) {
    if (window.websiteInstance) {
        window.websiteInstance.goToTestimonial(index);
    }
}

// Add CSS for form validation
const formStyles = `
    .field-error {
        color: #e74c3c;
        font-size: 0.8rem;
        margin-top: 5px;
    }
    
    .form-control.error {
        border-color: #e74c3c !important;
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = formStyles;
document.head.appendChild(styleSheet);

// Export for global access
window.ModernWebsite = ModernWebsite;

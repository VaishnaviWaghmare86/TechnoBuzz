$(document).ready(function(){

    const searchParams = new URLSearchParams(window.location.search);
    const formStatus = searchParams.get('form_status');
    const formType = searchParams.get('form_type');

    if (formStatus) {
        const statusMessageMap = {
            contact: {
                success: 'Contact form submitted successfully.',
                error: 'Contact form submit failed. Please try again.'
            },
            career: {
                success: 'Career form submitted successfully.',
                error: 'Career form submit failed. Please try again.'
            }
        };

        const popupMessage = statusMessageMap[formType]?.[formStatus] || 'Form submitted.';
        window.alert(popupMessage);

        const cleanUrl = window.location.pathname + window.location.hash;
        window.history.replaceState({}, document.title, cleanUrl);
    }

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'linear-gradient(135deg, rgba(11, 94, 215, 0.95), rgba(0, 59, 142, 0.95))','box-shadow':'0 10px 30px rgba(0,0,0,0.2)'});
        }
        else
        {
            $('.header').css({'background':'linear-gradient(135deg, rgba(11, 94, 215, 0.1), rgba(0, 59, 142, 0.1))','box-shadow':'0 8px 32px rgba(0, 0, 0, 0.3)'});
        }
    });

    // Enhanced counter animation with galaxy theme
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 10);
        } else {
            counter.innerText = target;
            // Add celebration animation when counter completes
            $(counter).addClass('counter-complete');
            setTimeout(() => {
                $(counter).removeClass('counter-complete');
            }, 1000);
        }
    };

    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    // Smooth scroll for navigation links
    $('.navbar a, .back-to-top').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 1500, 'easeInOutExpo');
        }
    });

    // Add parallax effect to hero section with galaxy theme
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        $('.home h1').css('transform', `translateY(${scrolled * 0.3}px)`);
        $('.home h2').css('transform', `translateY(${scrolled * 0.2}px)`);
        $('.home .wave').css('transform', `translateY(${scrolled * 0.1}px)`);
        
        // Parallax for galaxy background
        $('body::before').css('transform', `translateY(${scrolled * 0.05}px)`);
        $('body::after').css('transform', `translateY(${scrolled * 0.02}px)`);
    });

    // Add hover effects for service cards with galaxy theme
    $('.item').hover(
        function() {
            $(this).find('.icon').addClass('icon-bounce');
            $(this).addClass('card-glow');
        },
        function() {
            $(this).find('.icon').removeClass('icon-bounce');
            $(this).removeClass('card-glow');
        }
    );

    // Add typing effect to hero title
    const heroTitle = $('.home h1').text();
    $('.home h1').empty();
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < heroTitle.length) {
            $('.home h1').append(heroTitle.charAt(charIndex));
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);

    // Add floating animation to elements
    $('.floating-element').each(function(index) {
        $(this).css('animation-delay', `${index * 0.5}s`);
    });

    // Add scroll-triggered animations with galaxy effects
    const animateOnScroll = () => {
        $('.item, .team .card, .founder-info').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    };

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} },
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} },
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow').addClass('show');
    } else {
        $('.back-to-top').fadeOut('slow').removeClass('show');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    const $this = $(this);
    const $accordion = $this.parent();
    const $body = $this.next('.accordion-body');
    const $allAccordions = $('.accordion');
    const $allBodies = $('.accordion-body');
    const $allHeaders = $('.accordion-header span');

    if ($accordion.hasClass('active')) {
        $accordion.removeClass('active');
        $body.slideUp(500);
        $this.find('span').text('+');
    } else {
        $allAccordions.removeClass('active');
        $allBodies.slideUp(500);
        $allHeaders.text('+');
        
        $accordion.addClass('active');
        $body.slideDown(500);
        $this.find('span').text('-');
    }
});

// Enhanced galaxy particle effect
function createGalaxyParticle() {
    const particle = $('<div class="galaxy-particle"></div>');
    $('.home').append(particle);
    
    const size = Math.random() * 4 + 1;
    const startX = Math.random() * $(window).width();
    const startY = $(window).height();
    const duration = Math.random() * 4000 + 2000;
    const colors = ['#ff77c6', '#77d8ff', '#ffffff', '#ffd700', '#ff69b4'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.css({
        width: size + 'px',
        height: size + 'px',
        left: startX + 'px',
        top: startY + 'px',
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        animation: `galaxyFloat ${duration}ms linear`,
        boxShadow: `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}40`
    });
    
    particle.animate({
        top: -100,
        opacity: 0,
        transform: `translateX(${Math.random() * 200 - 100}px)`
    }, duration, function() {
        particle.remove();
    });
}

// Create galaxy particles periodically
setInterval(createGalaxyParticle, 200);

// Create shooting stars
function createShootingStar() {
    const star = $('<div class="shooting-star"></div>');
    $('body').append(star);
    
    const startX = Math.random() * $(window).width();
    const startY = Math.random() * $(window).height() / 2;
    const duration = Math.random() * 1000 + 500;
    
    star.css({
        width: '2px',
        height: '2px',
        left: startX + 'px',
        top: startY + 'px',
        background: '#ffffff',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        boxShadow: '0 0 10px #ffffff'
    });
    
    star.animate({
        left: startX + 200,
        top: startY + 200,
        opacity: 0
    }, duration, function() {
        star.remove();
    });
}

// Create shooting stars periodically
setInterval(createShootingStar, 3000);

// Add CSS for galaxy animations
$('<style>').text(`
    .galaxy-particle {
        z-index: 1;
    }
    @keyframes galaxyFloat {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    .shooting-star {
        z-index: 2;
    }
    .icon-bounce {
        animation: iconBounce 0.6s ease-in-out;
    }
    @keyframes iconBounce {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.2) rotate(10deg); }
    }
    .animate-in {
        animation: slideInUp 0.8s ease-out;
    }
    @keyframes slideInUp {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    .counter-complete {
        animation: counterPulse 1s ease-in-out;
    }
    @keyframes counterPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); color: #77d8ff; text-shadow: 0 0 20px #77d8ff; }
    }
    .card-glow {
        animation: cardGlowEffect 2s ease-in-out infinite alternate;
    }
    @keyframes cardGlowEffect {
        0% { box-shadow: 0 10px 30px rgba(255, 119, 198, 0.3); }
        100% { box-shadow: 0 10px 50px rgba(11, 94, 215, 0.5), 0 0 80px rgba(255, 119, 198, 0.3); }
    }
`).appendTo('head');

});

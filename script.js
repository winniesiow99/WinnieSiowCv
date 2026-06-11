// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// 1. Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const tl = gsap.timeline({
        onComplete: () => {
            preloader.style.display = 'none';
            // Start entry animations
            initHeroAnimations();
        }
    });

    tl.to('.loader-cute', {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: 'back.in(1.7)'
    })
    .to('.loader-text', {
        y: -20,
        opacity: 0,
        duration: 0.3
    }, '-=0.2')
    .to(preloader, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    });
});

// 2. Custom Cursor Follower
const follower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Quick GSAP update for cursor following
    gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out'
    });
});

// Add hover states for cursor
const hoverElements = document.querySelectorAll('a, button, .btn-cute, .timeline-card, .profile-card, .sidebar-card, .edu-card, .lang-badge, .contact-icon, .form-input');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.classList.add('hovering');
        gsap.to(follower, { scale: 1.2, duration: 0.2 });
    });
    
    el.addEventListener('mouseleave', () => {
        follower.classList.remove('hovering');
        gsap.to(follower, { scale: 1, duration: 0.2 });
    });
});

// 3. Floating background shapes
const shapes = document.querySelectorAll('.floating-shape');
shapes.forEach(shape => {
    // Random float animation
    gsap.to(shape, {
        x: 'random(-60, 60)',
        y: 'random(-60, 60)',
        rotation: 'random(-30, 30)',
        duration: 'random(8, 15)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});

// 4. Hero animations function
function initHeroAnimations() {
    const heroTl = gsap.timeline();
    
    heroTl.from('.avatar-badge', {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.5)'
    })
    .from('.hero-tag', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
    }, '-=0.8')
    .from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
    }, '-=0.5')
    .from('.hero-buttons .btn-cute', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(2)'
    }, '-=0.4')
    .from('.decorative-sticker', {
        scale: 0,
        rotation: -90,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.5)'
    }, '-=0.5');
}

// 5. ScrollTrigger Animations for sections
// Title highlight animation
const titles = document.querySelectorAll('.section-title');
titles.forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 92%',
            toggleActions: 'play none none none'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)'
    });
});

// About Section Reveal
gsap.from('.profile-card', {
    scrollTrigger: {
        trigger: '.profile-grid',
        start: 'top 92%',
        toggleActions: 'play none none none'
    },
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.sidebar-card', {
    scrollTrigger: {
        trigger: '.profile-grid',
        start: 'top 92%',
        toggleActions: 'play none none none'
    },
    x: 80,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power2.out'
}, '-=0.6');

// Experience Timeline Line Animating Down
gsap.from('.timeline-line', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        end: 'bottom 80%',
        scrub: true
    },
    scaleY: 0,
    transformOrigin: 'top center',
    ease: 'none'
});

// Experience Timeline Cards & Dots Animations
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    const isOdd = index % 2 === 0;
    const card = item.querySelector('.timeline-card');
    const dot = item.querySelector('.timeline-dot');
    const date = item.querySelector('.timeline-date');
    
    gsap.from(card, {
        scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none'
        },
        x: isOdd ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.2)'
    });
    
    gsap.from(dot, {
        scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none'
        },
        scale: 0,
        duration: 0.5,
        delay: 0.2,
        ease: 'back.out(2)'
    });

    if (date) {
        gsap.from(date, {
            scrollTrigger: {
                trigger: item,
                start: 'top 92%',
                toggleActions: 'play none none none'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 0.1,
            ease: 'power2.out'
        });
    }
});

// Education Cards Reveal

// Contact & Reference Reveal
gsap.from('.ref-card', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top bottom',
        toggleActions: 'play none none none'
    },
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.contact-form-card', {
    scrollTrigger: {
        trigger: '.contact-container',
        start: 'top bottom',
        toggleActions: 'play none none none'
    },
    x: 80,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
});

// 6. Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// 7. Contact Form Interactive Submit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        
        // Disable button and animate it
        submitBtn.disabled = true;
        
        const tl = gsap.timeline();
        
        tl.to(submitBtn, {
            scale: 0.95,
            duration: 0.1
        })
        .to(submitBtn, {
            scale: 1,
            rotation: 2,
            duration: 0.1,
            repeat: 5,
            yoyo: true
        })
        .to(submitBtn, {
            backgroundColor: '#FFADAD',
            color: '#4D3E3E',
            duration: 0.3
        })
        .to(submitBtn, {
            scale: 1,
            rotation: 0,
            duration: 0.2,
            onComplete: () => {
                // Mock success message
                alert('✨ Thank you! Your message has been sent successfully. (Mock-up only) ✨');
                contactForm.reset();
                submitBtn.disabled = false;
                gsap.to(submitBtn, {
                    backgroundColor: '#FF9B9B',
                    color: '#FFFFFF',
                    duration: 0.3
                });
            }
        });
    });
}

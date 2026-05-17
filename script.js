/* ==========================================
   PRIMEEVENTS COMPLETE JAVASCRIPT FILE
   ========================================== */

// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== CLOSE MENU WHEN LINK IS CLICKED =====
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== SMOOTH SCROLL =====
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== HERO TEXT ANIMATION =====
const heroTitle = document.querySelector('.hero-content h1');

if (heroTitle) {
    heroTitle.classList.add('fade-in');
}

// ===== IMAGE GALLERY EFFECT =====
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// ===== EVENT CARD HOVER EFFECT =====
const eventCards = document.querySelectorAll('.event-card');

eventCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        if (name.value === '' || email.value === '' || message.value === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// ===== EMAIL VALIDATION FUNCTION =====
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.service-card, .event-card, .gallery-item, .testimonial-card');

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// ===== LIVE DATE AND TIME =====
const liveDate = document.querySelector('.live-date');

function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    if (liveDate) {
        liveDate.textContent = now.toLocaleDateString('en-US', options);
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ===== VIDEO AUTO PLAY WHEN VISIBLE =====
const video = document.querySelector('video');

if (video) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    });

    observer.observe(video);
}

// ===== TESTIMONIAL SLIDER =====
const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
    });

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
}

if (testimonials.length > 0) {
    showTestimonials();
    setInterval(showTestimonials, 4000);
}

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    if (loader) {
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ===== DARK/LIGHT MODE TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
}

// ===== LOAD SAVED THEME =====
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});

// ===== COUNTDOWN TIMER =====
const countdown = document.querySelector('.countdown');

if (countdown) {
    const eventDate = new Date('December 31, 2026 18:00:00').getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <h2>${days}d ${hours}h ${minutes}m ${seconds}s</h2>
        `;
    }, 1000);
}

// ===== MUSIC PLAY BUTTON =====
const musicBtn = document.querySelector('.music-btn');
const backgroundMusic = document.querySelector('#background-music');

if (musicBtn && backgroundMusic) {
    musicBtn.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicBtn.textContent = 'Pause Music';
        } else {
            backgroundMusic.pause();
            musicBtn.textContent = 'Play Music';
        }
    });
}

// ===== POPUP MODAL =====
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

if (openModal && closeModal && modal) {
    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// ===== CONSOLE MESSAGE =====
console.log('PrimeEvents Website Loaded Successfully!');

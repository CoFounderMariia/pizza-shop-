// Smooth scrolling for navigation links
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

// Order Now button functionality
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'Order Now') {
            alert('🍕 Welcome to Founder\'s Pizza!\n\nOur ordering system is coming soon.\n\nIn the meantime, please call us at (555) FOUNDER-1 or visit us in person!\n\nHigh-Protein • Less Oil • More Vegetables');
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        } else if (this.textContent === 'Send Message') {
            const email = this.closest('form').querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you! We\'ll send special offers to ' + email);
                this.closest('form').reset();
            } else {
                alert('Please enter your email address.');
            }
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe mission cards and menu items
document.querySelectorAll('.mission-card, .benefit-item, .pizza-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile menu toggle (for future expansion)
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.style.display = 'inline-block';
        });
    }
});

// Active navigation link
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#2ecc71';
        } else {
            link.style.color = 'white';
        }
    });
});

// Add scrolling background effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }
});

console.log('🍕 Welcome to Founder\'s Pizza! Building a healthier pizza revolution, one slice at a time.');

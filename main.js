document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll reveal animations
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Apply reveal to sections
    const sections = document.querySelectorAll('section, .timeline-item, .consulting-grid .card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.classList.add('reveal-on-scroll');
        observer.observe(section);
    });

    // Smooth scroll for anchor links
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

    // Subtle header transparency change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
            header.style.padding = '1rem 0';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.padding = '2rem 0';
        }
    });
});

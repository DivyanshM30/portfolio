
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu toggle (basic implementation)
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing animation when page loads
    window.addEventListener('load', function() {
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }
    });

    // Add click tracking for project links (analytics)
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', function() {
            const projectName = this.closest('.project-card').querySelector('.project-title').textContent;
            const linkType = this.textContent.includes('Demo') ? 'demo' : 'github';
            console.log(`Project link clicked: ${projectName} - ${linkType}`);
            // You can integrate with Google Analytics or other tracking here
        });
    });

    // Dynamic copyright year
    document.querySelector('.footer p').innerHTML = 
        `&copy; ${new Date().getFullYear()} Divyansh Mishra. All rights reserved. | Made with ❤️ and lots of ☕`;

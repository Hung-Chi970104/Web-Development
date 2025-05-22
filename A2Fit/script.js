document.addEventListener('DOMContentLoaded', () => {
    // Navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
        
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                spans.forEach(span => span.classList.remove('active'));
            }
            
            // Scroll to target
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.program-card, .tier-card');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('featured') ? 
                    'scale(1.05) skewY(-1deg)' : 'translateY(0) skewY(-1deg)';
            }
        });
    };
    
    // Set initial state for animations
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px) skewY(-1deg)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    revealOnScroll();
    
    // Intense hover effects for buttons
    const buttons = document.querySelectorAll('.cta-button, .program-button, .tier-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transition = 'all 0.2s ease';
            this.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = 'none';
        });
    });
    
    // Navigation highlight on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (current && item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
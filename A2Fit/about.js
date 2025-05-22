document.addEventListener('DOMContentLoaded', () => {
    // Testimonial Slider Functionality
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    
    // Set the first slide as active
    testimonialSlides[currentSlide].classList.add('active');
    
    // Show the selected slide
    function showSlide(index) {
        // Remove active class from all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.transform = 'translateX(100%)';
        });
        
        // Add active class to current slide
        testimonialSlides[index].classList.add('active');
        testimonialSlides[index].style.transform = 'translateX(0)';
    }
    
    // Navigate to previous slide
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = testimonialSlides.length - 1;
        }
        showSlide(currentSlide);
    }
    
    // Navigate to next slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= testimonialSlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    
    // Set up event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto-advance slides every 6 seconds
    const slideInterval = setInterval(nextSlide, 6000);
    
    // Pause auto-advance when hovering over the slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    // Scroll animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-container');
    
    // Add animation when stats are in viewport
    function animateStats() {
        const windowHeight = window.innerHeight;
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        
        if (statsSectionTop < windowHeight - 100) {
            statNumbers.forEach(stat => {
                const targetNumber = parseInt(stat.textContent.replace(/\D/g, ''));
                let currentNumber = 0;
                const duration = 2000; // 2 seconds
                const increment = targetNumber / (duration / 20);
                
                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        clearInterval(counter);
                        currentNumber = targetNumber;
                    }
                    
                    // Format the output
                    let formattedNumber = Math.floor(currentNumber);
                    if (stat.textContent.includes('k')) {
                        formattedNumber = formattedNumber + 'k+';
                    } else if (stat.textContent.includes('%')) {
                        formattedNumber = formattedNumber + '%';
                    } else {
                        formattedNumber = formattedNumber + '+';
                    }
                    
                    stat.textContent = formattedNumber;
                }, 20);
                
                // Remove from animation list
                stat.classList.add('animated');
            });
            
            // Remove the event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    }
    
    // Add scroll event listener for stats
    window.addEventListener('scroll', animateStats);
    
    // Trigger once on load
    animateStats();
    
    // Parallax effect for the about hero section
    const aboutHero = document.querySelector('.about-hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        aboutHero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
    
    // Animate team member cards on scroll
    const teamMembers = document.querySelectorAll('.team-member');
    
    const animateTeam = () => {
        const windowHeight = window.innerHeight;
        
        teamMembers.forEach((member, index) => {
            const memberTop = member.getBoundingClientRect().top;
            
            if (memberTop < windowHeight - 100) {
                setTimeout(() => {
                    member.style.transform = 'translateY(0)';
                    member.style.opacity = '1';
                }, 200 * index);
            }
        });
    };
    
    // Set initial state for team animations
    teamMembers.forEach(member => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(50px)';
        member.style.transition = 'all 0.6s ease';
    });
    
    // Add scroll event listener for team animation
    window.addEventListener('scroll', animateTeam);
    
    // Trigger once on load
    animateTeam();
    
    // Philosophy items animation
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    
    const animatePhilosophy = () => {
        const windowHeight = window.innerHeight;
        
        philosophyItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.style.transform = 'translateY(0)';
                    item.style.opacity = '1';
                }, 200 * index);
            }
        });
    };
    
    // Set initial state for philosophy animations
    philosophyItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    // Add scroll event listener for philosophy animation
    window.addEventListener('scroll', animatePhilosophy);
    
    // Trigger once on load
    animatePhilosophy();
});
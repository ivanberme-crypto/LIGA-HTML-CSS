document.addEventListener('DOMContentLoaded', function() {
    // EA Sports Functional Carousel
    const track = document.querySelector('.ea-carousel__track');
    const slides = document.querySelectorAll('.ea-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    
    // Initialize carousel
    function initCarousel() {
        if (slides.length > 0) {
            goToSlide(0);
            startAutoplay();
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('ea-slide--active');
            // Also remove active from all dots in this slide
            slide.querySelectorAll('.ea-dot').forEach(dot => {
                dot.classList.remove('ea-dot--active');
            });
        });

        currentSlide = index;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        // Add active to current slide
        slides[currentSlide].classList.add('ea-slide--active');
        
        // Add active to first dot of current slide (the one matching currentSlide)
        const currentDots = slides[currentSlide].querySelectorAll('.ea-dot');
        if (currentDots[currentSlide]) {
            currentDots[currentSlide].classList.add('ea-dot--active');
        }

        updateTrackPosition();
    }

    function updateTrackPosition() {
        const container = document.querySelector('.ea-carousel__track-container');
        const slideWidth = container.offsetWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
        
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Autoplay
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 8000);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // Event listeners for dots (inside cards)
    document.querySelectorAll('.ea-dot').forEach((dot) => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            goToSlide(slideIndex);
            startAutoplay();
        });
    });
    
    // Pause on hover
    const carousel = document.querySelector('.ea-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        updateTrackPosition();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoplay();
        }
    });
    
    // Initialize
    initCarousel();
});

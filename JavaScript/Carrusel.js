document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.fd__carousel__track');
    const slides = document.querySelectorAll('.fd__slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    
    function initCarousel() {
        if (slides.length > 0) {
            goToSlide(0);
            startAutoplay();
        }
    }

    function goToSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('fd__slide--active');
            slide.querySelectorAll('.fd__dot').forEach(dot => {
                dot.classList.remove('fd__dot--active');
            });
        });

        currentSlide = index;

        if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        } else if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add('fd__slide--active');
        
        const currentDots = slides[currentSlide].querySelectorAll('.fd__dot');
        if (currentDots[currentSlide]) {
            currentDots[currentSlide].classList.add('fd__dot--active');
        }

        updateTrackPosition();
    }

    function updateTrackPosition() {
        const container = document.querySelector('.fd__carousel__track-container');
        const slideWidth = container.offsetWidth;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
    
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    function startAutoplay() {
        stopAutoplay();
        autoplayInterval = setInterval(nextSlide, 8000);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    document.querySelectorAll('.fd__dot').forEach(dot => {
    if (parseInt(dot.dataset.slide) === currentSlide) {
        dot.classList.add('fd__dot--active');
    }
});
    
    document.querySelectorAll('.fd__cards__arrow--prev').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlide();
            startAutoplay();
        });
    });
    
    document.querySelectorAll('.fd__cards__arrow--next').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlide();
            startAutoplay();
        });
    });

    const carousel = document.querySelector('.fd__carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
    }
    
    window.addEventListener('resize', function() {
        updateTrackPosition();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoplay();
        }
    });
    initCarousel();
});
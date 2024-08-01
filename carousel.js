document.addEventListener('DOMContentLoaded', function() {
    const carouselSection = document.getElementById('realisations');
    const carousel = carouselSection.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const indicatorsContainer = carouselSection.querySelector('.carousel-indicators');
    let currentIndex = 0;
    const totalItems = items.length;

    // Create indicators
    items.forEach((_, index) => {
        const indicator = document.createElement('li');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => moveToIndex(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');

    function moveToIndex(index) {
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        carousel.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        updateIndicators();
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function moveNext() {
        moveToIndex(currentIndex + 1);
    }

    // Auto-scroll
    setInterval(moveNext, 5000); // Change image every 5 seconds
});
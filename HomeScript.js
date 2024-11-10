let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Loop to the last slide
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Calculate the offset for the slides
    slides.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Autoplay functionality
setInterval(() => {
    moveSlide(1);
}, 3000); // Change the slide every 3 seconds

document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar-nav');
    if (window.scrollY > 50) { // Change color when scrolled more than 50px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
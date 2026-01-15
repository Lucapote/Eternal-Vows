// Carousel Logic
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('opacity-100', i === index);
        slide.classList.toggle('opacity-0', i !== index);
        slide.classList.toggle('z-10', i === index);
        slide.classList.toggle('z-0', i !== index);
    });
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-primary');
        } else {
            dot.classList.add('bg-gray-300');
            dot.classList.remove('bg-primary');
        }
    });
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { prevSlide(); clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); });
    nextBtn.addEventListener('click', () => { nextSlide(); clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }));

    slideInterval = setInterval(nextSlide, 5000);
}
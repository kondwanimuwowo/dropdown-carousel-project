const slides = document.querySelectorAll("div.carousel-slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".carousel-dot");
const carouselNav = document.querySelector(".carousel-nav");

let slideIndex = 0;

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", initializeSlider);

// Navigation arrows
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Dot navigation
carouselNav.addEventListener("click", (e) => {
  dots.forEach((dot, index) => {
    if (e.target === dot) {
      showSlide(index);
    }
  });
});

function initializeSlider() {
  showSlide(slideIndex);
  activeDot(slideIndex);
}

function showSlide(index) {
  // Ensure the index is in bounds
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  // Remove previous active slide
  slides.forEach((slide) => slide.classList.remove("display-slide"));
  // Show current slide
  slides[slideIndex].classList.add("display-slide");

  // Update dots
  activeDot(slideIndex);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function activeDot(index) {
  dots.forEach((dot) => dot.classList.remove("active"));
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

// Auto-slide every 5 seconds (5000 milliseconds)
let autoSlide = setInterval(() => {
  nextSlide();
}, 5000);

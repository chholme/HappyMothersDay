document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-item");
  let currentSlide = 0;
  let slideInterval;

  function showSlide(n) {
    slides[currentSlide].classList.remove("current");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("current");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }

  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  startSlideInterval(); // Start automatic sliding

  // Pause automatic sliding when hovering over the slider container
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", () => {
    stopSlideInterval();
  });

  // Resume automatic sliding when mouse leaves the slider container
  sliderContainer.addEventListener("mouseleave", () => {
    startSlideInterval();
  });
});

const slides = document.querySelectorAll(".slide");
let currentSlideIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

// Show the first slide initially
showSlide(currentSlideIndex);

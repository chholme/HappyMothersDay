const sliderImages = document.querySelectorAll(".slider-image");
const imageWidth = sliderImages[0].clientWidth; // Get width of one image
const totalWidth = imageWidth * sliderImages.length; // Calculate total width

// Update animation definition in CSS (assuming separate stylesheet)
document.documentElement.style.setProperty("--total-width", totalWidth + "px");

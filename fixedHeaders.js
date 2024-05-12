document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll("h1");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    headers.forEach((header, index) => {
      const fixedHeader = header.parentElement;

      // Get the offsetTop of the next sibling element
      const nextSiblingOffsetTop = fixedHeader.nextElementSibling.offsetTop;

      if (scrollPosition >= nextSiblingOffsetTop - 430) {
        // Make the fixedHeader fixed
        fixedHeader.style.position = "fixed";
        fixedHeader.style.top = `${index * header.offsetHeight}px`; // Adjust the top position based on index
        fixedHeader.style.left = "0";
        fixedHeader.style.width = "100%";
        fixedHeader.style.zIndex = "1000"; // Adjust z-index if needed
      } else {
        fixedHeader.style.position = "static";
      }
    });
  });
});

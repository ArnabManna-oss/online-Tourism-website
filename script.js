const slider = document.querySelector('#slider');
const images = slider.querySelectorAll('img');
let current = 0;

function nextSlide() {
  // Remove the "active" class from the current image
  images[current].classList.remove('active');

  // Increment the current index and set it to 0 if it goes past the last image
  current = (current + 1) % images.length;

  // Add the "active" class to the new current image
  images[current].classList.add('active');
}

// Set an interval to switch the "active" class on the images every 20 seconds
setInterval(nextSlide, 3000);

const form = document.querySelector('#booking-form');
const confirmation = document.querySelector('#booking-confirmation');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate the form input
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const partySize = document.querySelector('#party-size').value;

  if (name && email && phone && date && time && partySize) {
    // Form input is valid, show confirmation message
    confirmation.style.display = 'block';
    form.reset();
  } else {
    // Form input is invalid, show an error message
    alert('Please fill out all the fields');
  }
});

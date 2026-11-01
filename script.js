// Mobile navigation button.
function toggleNavigation() {
  var navigation = document.getElementById("site-nav");
  var menuButton = document.getElementById("menu-toggle");
  var isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
}

// Add a subtle visual response as visitors move over destination cards.
function highlightCard(card) { card.classList.add("is-highlighted"); }
function resetCard(card) { card.classList.remove("is-highlighted"); }

// Update the image note when a culture photograph is hovered.
function showImageMessage(elementId) {
  var message = document.getElementById(elementId);
  if (message) { message.textContent = "Omani halwa with saffron. Image source and credits are listed in the README."; }
}
function hideImageMessage(elementId) {
  var message = document.getElementById(elementId);
  if (message) { message.textContent = "Omani halwa with saffron."; }
}

// Check the planning form in this browser; it does not send or store submissions.
function validateTripForm() {
  var name = document.getElementById("visitor-name").value.trim();
  var email = document.getElementById("visitor-email").value.trim();
  var duration = document.getElementById("trip-duration").value;
  var destinations = document.querySelectorAll('input[name="destinations"]:checked');
  var isValid = true;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("duration-error").textContent = "";
  document.getElementById("destination-error").textContent = "";
  document.getElementById("form-message").textContent = "This form checks your entries only. It does not email or save your details.";

  if (name === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    isValid = false;
  } else if (name.length < 2 || name.length > 60) {
    document.getElementById("name-error").textContent = "Your name must be between 2 and 60 characters.";
    isValid = false;
  }
  if (email === "") {
    document.getElementById("email-error").textContent = "Please enter your email address.";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("email-error").textContent = "Please enter an email address in a valid format.";
    isValid = false;
  }
  if (duration === "") {
    document.getElementById("duration-error").textContent = "Please enter your trip duration.";
    isValid = false;
  } else if (!Number.isInteger(Number(duration)) || Number(duration) < 1 || Number(duration) > 30) {
    document.getElementById("duration-error").textContent = "Enter a whole number from 1 to 30 days.";
    isValid = false;
  }
  if (destinations.length === 0) {
    document.getElementById("destination-error").textContent = "Select at least one destination.";
    isValid = false;
  }

  if (!isValid) {
    document.getElementById("form-message").textContent = "Please correct the highlighted details and try again.";
    return false;
  }

  document.getElementById("form-message").textContent = destinations.length + " destination(s) selected. This demonstration does not send or store your details.";
  return false;
}



// Show a short prompt on the home page when the visitor clicks the button.
function showWelcomeMessage() {
    var message = document.getElementById("welcome-message");
    message.textContent = "[Replace this with a short travel tip that you have written.]";
}

// Reveal the editable note for a destination card.
function showPlaceNote(noteId) {
    var note = document.getElementById(noteId);
    note.style.display = "block";
}

// Mouse events used by the culture image.
function showImageMessage() {
    var message = document.getElementById("image-message");
    message.textContent = "[Add your own image information here.]";
}

function hideImageMessage() {
    var message = document.getElementById("image-message");
    message.textContent = "[Write a caption for your image.]";
}

function validateTripForm() {
    var name = document.getElementById("visitor-name").value.trim();
    var email = document.getElementById("visitor-email").value.trim();
    var duration = document.getElementById("trip-duration").value;
    var destination = document.getElementById("destination").value;
    var isValid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("duration-error").textContent = "";
    document.getElementById("destination-error").textContent = "";
    document.getElementById("form-message").textContent = "This example checks your entries in this browser. It does not send or store them.";

    if (name === "") {
        document.getElementById("name-error").textContent = "Please enter your name.";
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
        document.getElementById("duration-error").textContent = "Please enter the number of days.";
        isValid = false;
    } else if (Number(duration) < 1 || Number(duration) > 30) {
        document.getElementById("duration-error").textContent = "Trip duration must be between 1 and 30 days.";
        isValid = false;
    }
    if (destination === "") {
        document.getElementById("destination-error").textContent = "Please choose a preferred destination.";
        isValid = false;
    }

    if (!isValid) {
        document.getElementById("form-message").textContent = "Please correct the errors above.";
        return false;
    }

    document.getElementById("form-message").textContent = "The entries passed the checks. This example does not send or store your form.";
    return false;
}


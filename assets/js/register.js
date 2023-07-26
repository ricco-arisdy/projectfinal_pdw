// JavaScript code for handling registration form submission
window.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Perform form validation
        if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Perform further processing (e.g., send the form data to the server)
        // ...

        // Reset the form fields
        form.reset();
    });
});

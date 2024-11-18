document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", validateForm);

    function validateForm(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Collect form values
        const name = document.getElementById("name");
        const surname = document.getElementById("surname");
        const address = document.getElementById("address");
        const phone = document.getElementById("phone");
        const dob = document.getElementById("dob");
        const password = document.getElementById("password");
        const city = document.getElementById("city");
        const country = document.getElementById("country");

        // Regular expressions for validation
        const nameRegex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż]+$/; // Letters only, including Polish characters
        const phoneRegex = /^[0-9]{9}$/; // Polish phone number (9 digits)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Name validation (letters only)
        if (name.value.trim() === "") {
            showError(name, "Imię jest wymagane.");
            isValid = false;
        } else if (!nameRegex.test(name.value.trim())) {
            showError(name, "Imię może zawierać tylko litery.");
            isValid = false;
        }

        // Surname validation (letters only)
        if (surname.value.trim() === "") {
            showError(surname, "Nazwisko jest wymagane.");
            isValid = false;
        } else if (!nameRegex.test(surname.value.trim())) {
            showError(surname, "Nazwisko może zawierać tylko litery.");
            isValid = false;
        }

        // Address validation
        if (address.value.trim() === "") {
            showError(address, "Adres jest wymagany.");
            isValid = false;
        }

        // Phone validation
        if (!phoneRegex.test(phone.value.trim())) {
            showError(phone, "Numer telefonu musi mieć 9 cyfr.");
            isValid = false;
        }

        // Password validation
        if (!passwordRegex.test(password.value)) {
            showError(password, "Hasło musi mieć co najmniej 8 znaków, zawierać litery i cyfry.");
            isValid = false;
        }

        // City validation
        if (city.value.trim() === "") {
            showError(city, "Miasto jest wymagane.");
            isValid = false;
        }

        // Country validation
        if (country.value.trim() === "") {
            showError(country, "Państwo jest wymagane.");
            isValid = false;
        }

        // Age validation
        if (!isAdult(dob.value)) {
            showError(dob, "Musisz mieć co najmniej 18 lat.");
            isValid = false;
        }

        if (isValid) {
            alert("Formularz został poprawnie wypełniony!");
            form.submit();
        }
    }

    // Function to check if the user is at least 18 years old
    function isAdult(dob) {
        if (!dob) return false;
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        return age > 18 || (age === 18 && monthDiff >= 0 && today.getDate() >= birthDate.getDate());
    }

    // Function to show error messages
    function showError(input, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.innerText = message;
        input.parentElement.appendChild(errorDiv);
    }

    // Function to clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(error => error.remove());
    }
});

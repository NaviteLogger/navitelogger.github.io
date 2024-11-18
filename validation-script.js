document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();

    // Regular expressions for validation
    const phoneRegex = /^[0-9]{9}$/; // Polish phone number (9 digits)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let isValid = true;

    // Validation checks
    if (!name || !surname || !address || !phone || !dob || !password || !city || !country) {
        alert("Wszystkie pola muszą być wypełnione!");
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Numer telefonu musi mieć 9 cyfr.");
        isValid = false;
    }

    if (!passwordRegex.test(password)) {
        alert("Hasło musi mieć co najmniej 8 znaków, zawierać litery i cyfry.");
        isValid = false;
    }

    if (!isAdult(dob)) {
        alert("Musisz mieć co najmniej 18 lat.");
        isValid = false;
    }

    if (isValid) {
        alert("Formularz został poprawnie wypełniony!");
        document.getElementById("registrationForm").submit();
    }
});

// Function to check if the user is at least 18 years old
function isAdult(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    return age > 18 || (age === 18 && monthDiff >= 0 && today.getDate() >= birthDate.getDate());
}

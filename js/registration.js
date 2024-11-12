// Password matching validation
function validatePassword(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        return false; // Prevent form submission
    } else {
        errorMessage.style.display = 'none';
    }

    // If passwords match, save data to localStorage and redirect
    saveFormDataToLocalStorage();
    console.log("Passwords match. Redirecting..."); // Debugging log
    window.location.href = 'login.html'; // Adjust this URL to your actual login page
    return false; // Prevent form submission to allow the redirect
}

// Save form data to localStorage
function saveFormDataToLocalStorage() {
    const fullName = document.getElementById('full-name').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const password = document.getElementById('password').value;

    // Create an object to hold form data
    const userData = {
        fullName: fullName,
        mobile: mobile,
        email: email,
        address: address,
        password: password, // Note: Passwords should not be stored in plain text in real apps!
    };

    // Save the data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, show a success message or alert
    alert("Registration successful! Redirecting to login page.");

    // Redirect to the login page
    window.location.href = 'login.html'; // Adjust this URL to your actual login page
}

// Additional client-side password validation on input change
// document.getElementById('confirm-password').addEventListener('input', validatePassword);
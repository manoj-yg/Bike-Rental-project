// Handle feedback form submission
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if(name && message) {
        alert(`Thank you, ${name}, for your feedback!`);
        document.getElementById('feedback-form').reset();
    }
});

// Handle login form submission
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if(email && password) {
        alert(`Welcome back, ${email}!`);
        document.getElementById('login-form').reset();
    }
});

// Handle signup form submission
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if(password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    if(name && email && password) {
        alert(`Account created for ${name}! Welcome to Yulu.`);
        document.getElementById('signup-form').reset();
    }
});

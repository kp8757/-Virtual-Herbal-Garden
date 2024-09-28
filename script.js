// Get the login form elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const signUpLink = document.getElementById('sign-up-link');
const socialMediaLinks = document.querySelectorAll('.social-media-link');

// Add event listeners to the login form elements
loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  // Validate the email and password inputs
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }
  // Send a request to the server to log in
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then((data) => {
    if (data.success) {
      // Log in successful, redirect to dashboard or homepage
      window.location.href = '/dashboard';
    } else {
      alert('Invalid email or password');
    }
  })
  .catch((error) => {
    console.error(error);
  });
});

// Add event listeners to the social media links
socialMediaLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Handle social media login logic here
    console.log(`Social media login clicked: ${link.dataset.platform}`);
  });
});

// Add event listener to the sign up link
signUpLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Redirect to sign up page
  window.location.href = '/sign-up';
});
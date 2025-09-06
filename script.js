// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Counter Functionality
let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('resetCounter');

const updateCounter = () => {
  counterDisplay.textContent = counter;
  counterDisplay.style.transform = 'scale(1.1)';
  setTimeout(() => counterDisplay.style.transform = 'scale(1)', 200);
};

incrementBtn.addEventListener('click', () => { counter++; updateCounter(); });
decrementBtn.addEventListener('click', () => { counter--; updateCounter(); });
resetBtn.addEventListener('click', () => { counter = 0; updateCounter(); });

// Form Validation
const form = document.getElementById('userForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const validateField = (field, errorId, condition) => {
  const errorElement = document.getElementById(errorId);
  if (condition) {
    errorElement.classList.add('show');
    field.style.borderColor = '#e74c3c';
    return false;
  } else {
    errorElement.classList.remove('show');
    field.style.borderColor = '#27ae60';
    return true;
  }
};

const validateForm = () => {
  const usernameValid = validateField(username, 'usernameError', username.value.trim().length < 3);
  const emailValid = validateField(email, 'emailError', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
  const passwordValid = validateField(password, 'passwordError', password.value.length < 6);
  return usernameValid && emailValid && passwordValid;
};

[username, email, password].forEach(field => {
  field.addEventListener('blur', validateForm);
  field.addEventListener('input', validateForm);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    const successMsg = document.getElementById('successMessage');
    successMsg.textContent = 'Account created successfully!';
    successMsg.style.opacity = '0';
    setTimeout(() => successMsg.style.opacity = '1', 100);
    form.reset();
    setTimeout(() => successMsg.textContent = '', 3000);
  }
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
  updateCounter();
});
// --- 1. DOM ELEMENT SELECTION ---
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const successMessage = document.getElementById('success-message');
const themeToggle = document.getElementById('theme-toggle');

// --- 2. FORM VALIDATION & SUBMISSION ---
form.addEventListener('submit', function(event) {
    event.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.classList.add('hidden');

    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    const messageVal = messageInput.value.trim();

    let isValid = true;

    if (nameVal === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    if (emailVal === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailVal)) {
            emailError.textContent = 'Please enter a valid email format.';
            isValid = false;
        }
    }

    if (messageVal === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    if (isValid) {
        form.reset();
        successMessage.classList.remove('hidden');

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
});

// --- 3. DARK MODE TOGGLE (Icon Button) ---
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
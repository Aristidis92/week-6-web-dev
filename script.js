// Part 1: JavaScript Event Handling

// Click event example
document.getElementById('click-btn').addEventListener('click', function() {
    document.getElementById('click-output').textContent = 'Button clicked! ' + new Date().toLocaleTimeString();
});

// Mouse events example
const colorBox = document.getElementById('color-box');
colorBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

colorBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f0f0f0';
});

// Keyboard events example
const keyInput = document.getElementById('key-input');
const keyDisplay = document.getElementById('key-display');

keyInput.addEventListener('keydown', function(e) {
    keyDisplay.textContent = `Key pressed: ${e.key} (KeyCode: ${e.keyCode})`;
});

// Part 2: Interactive Elements

// Light/Dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 
                      'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Counter game
let count = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('increment-btn').addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById('decrement-btn').addEventListener('click', function() {
    count--;
    counterDisplay.textContent = count;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    count = 0;
    counterDisplay.textContent = count;
});

// FAQ section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Update all icons
        document.querySelectorAll('.faq-question span').forEach(span => {
            span.textContent = '+';
        });
        
        // If answer wasn't active, open it
        if (!isActive) {
            answer.classList.add('active');
            this.querySelector('span').textContent = '-';
        }
    });
});

// Tabbed interface
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// Part 3: Form Validation
const form = document.getElementById('validation-form');

// Name validation
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');

nameInput.addEventListener('blur', function() {
    if (this.value.length < 2) {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
});

// Email validation
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('blur', function() {
    if (!emailRegex.test(this.value)) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

// Password validation
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

passwordInput.addEventListener('blur', function() {
    if (!passwordRegex.test(this.value)) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

// Message validation
const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');

messageInput.addEventListener('blur', function() {
    if (this.value.length < 10 || this.value.length > 200) {
        messageError.style.display = 'block';
    } else {
        messageError.style.display = 'none';
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate all fields
    if (nameInput.value.length < 2) {
        nameError.style.display = 'block';
        isValid = false;
    }
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'block';
        isValid = false;
    }
    
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (messageInput.value.length < 10 || messageInput.value.length > 200) {
        messageError.style.display = 'block';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('success-message').style.display = 'block';
        form.reset();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            document.getElementById('success-message').style.display = 'none';
        }, 3000);
    }
});
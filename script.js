/**
 * Form Validation Project - JavaScript Module
 * 
 * This module handles all form validation logic including:
 * - Real-time validation on input change
 * - Form submission validation
 * - Error message display
 * - Password visibility toggle
 * 
 * Author: Form Validation Project
 * Version: 1.0.0
 */

// DOM Elements
const form = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

// Validation state object to track field validity
const validationState = {
    fullName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false
};

/**
 * Initialize the form validation system
 */
function initializeFormValidation() {
    setupEventListeners();
    setupPasswordToggle();
    console.log('Form validation system initialized');
}

/**
 * Set up all event listeners for form inputs
 */
function setupEventListeners() {
    // Real-time validation on input change
    fullNameInput.addEventListener('input', () => validateField('fullName'));
    emailInput.addEventListener('input', () => validateField('email'));
    phoneInput.addEventListener('input', () => validateField('phone'));
    passwordInput.addEventListener('input', () => validateField('password'));
    confirmPasswordInput.addEventListener('input', () => validateField('confirmPassword'));
    
    // Form submission
    form.addEventListener('submit', handleFormSubmission);
    
    // Phone number input restriction (only numbers)
    phoneInput.addEventListener('keypress', restrictPhoneInput);
}

/**
 * Restrict phone input to numbers only
 * @param {Event} event - The keypress event
 */
function restrictPhoneInput(event) {
    const char = String.fromCharCode(event.which);
    
    // Allow backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].indexOf(event.keyCode) !== -1 ||
        // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (event.keyCode === 65 && event.ctrlKey === true) ||
        (event.keyCode === 67 && event.ctrlKey === true) ||
        (event.keyCode === 86 && event.ctrlKey === true) ||
        (event.keyCode === 88 && event.ctrlKey === true)) {
        return;
    }
    
    // Ensure that it's a number and prevent default if not
    if (!/[0-9]/.test(char)) {
        event.preventDefault();
    }
}

/**
 * Validate individual form fields based on field name
 * @param {string} fieldName - The name of the field to validate
 */
function validateField(fieldName) {
    let isValid = false;
    let errorMessage = '';
    
    switch (fieldName) {
        case 'fullName':
            const nameValidation = validateFullName(fullNameInput.value);
            isValid = nameValidation.isValid;
            errorMessage = nameValidation.message;
            break;
            
        case 'email':
            const emailValidation = validateEmail(emailInput.value);
            isValid = emailValidation.isValid;
            errorMessage = emailValidation.message;
            break;
            
        case 'phone':
            const phoneValidation = validatePhone(phoneInput.value);
            isValid = phoneValidation.isValid;
            errorMessage = phoneValidation.message;
            break;
            
        case 'password':
            const passwordValidation = validatePassword(passwordInput.value, fullNameInput.value);
            isValid = passwordValidation.isValid;
            errorMessage = passwordValidation.message;
            
            // Also revalidate confirm password if it has a value
            if (confirmPasswordInput.value) {
                validateField('confirmPassword');
            }
            break;
            
        case 'confirmPassword':
            const confirmValidation = validateConfirmPassword(
                passwordInput.value, 
                confirmPasswordInput.value
            );
            isValid = confirmValidation.isValid;
            errorMessage = confirmValidation.message;
            break;
    }
    
    // Update validation state
    validationState[fieldName] = isValid;
    
    // Display validation result
    displayValidationResult(fieldName, isValid, errorMessage);
}

/**
 * Validate full name field
 * @param {string} name - The full name value
 * @returns {Object} Validation result with isValid and message
 */
function validateFullName(name) {
    const trimmedName = name.trim();
    
    if (!trimmedName) {
        return { isValid: false, message: 'Full name is required' };
    }
    
    if (trimmedName.length < 5) {
        return { isValid: false, message: 'Full name must be at least 5 characters long' };
    }
    
    // Check if name contains only letters and spaces
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(trimmedName)) {
        return { isValid: false, message: 'Full name should contain only letters and spaces' };
    }
    
    return { isValid: true, message: '' };
}

/**
 * Validate email field
 * @param {string} email - The email value
 * @returns {Object} Validation result with isValid and message
 */
function validateEmail(email) {
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
        return { isValid: false, message: 'Email address is required' };
    }
    
    // Basic email validation - must contain @
    if (!trimmedEmail.includes('@')) {
        return { isValid: false, message: 'Enter correct email' };
    }
    
    // More comprehensive email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmedEmail)) {
        return { isValid: false, message: 'Enter correct email' };
    }
    
    return { isValid: true, message: '' };
}

/**
 * Validate phone number field
 * @param {string} phone - The phone number value
 * @returns {Object} Validation result with isValid and message
 */
function validatePhone(phone) {
    const trimmedPhone = phone.trim();
    
    if (!trimmedPhone) {
        return { isValid: false, message: 'Phone number is required' };
    }
    
    // Check if phone contains only digits
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(trimmedPhone)) {
        return { isValid: false, message: 'Phone number should contain only digits' };
    }
    
    // Check exact length
    if (trimmedPhone.length !== 10) {
        return { isValid: false, message: 'Phone number must be exactly 10 digits' };
    }
    
    // Check if phone is not the forbidden number
    if (trimmedPhone === '1234567890') {
        return { isValid: false, message: 'Please enter a valid phone number' };
    }
    
    return { isValid: true, message: '' };
}

/**
 * Validate password field
 * @param {string} password - The password value
 * @param {string} fullName - The full name for comparison
 * @returns {Object} Validation result with isValid and message
 */
function validatePassword(password, fullName = '') {
    if (!password) {
        return { isValid: false, message: 'Password is required' };
    }
    
    // Check minimum length
    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters long' };
    }
    
    // Check if password is not "password" (case-insensitive)
    if (password.toLowerCase() === 'password') {
        return { isValid: false, message: 'Password is not strong' };
    }
    
    // Check if password is not equal to user's name (case-insensitive)
    if (fullName && password.toLowerCase() === fullName.toLowerCase()) {
        return { isValid: false, message: 'Password cannot be the same as your name' };
    }
    
    return { isValid: true, message: '' };
}

/**
 * Validate confirm password field
 * @param {string} password - The original password
 * @param {string} confirmPassword - The confirm password value
 * @returns {Object} Validation result with isValid and message
 */
function validateConfirmPassword(password, confirmPassword) {
    if (!confirmPassword) {
        return { isValid: false, message: 'Please confirm your password' };
    }
    
    if (password !== confirmPassword) {
        return { isValid: false, message: 'Passwords do not match' };
    }
    
    return { isValid: true, message: '' };
}

/**
 * Display validation result for a field
 * @param {string} fieldName - The field name
 * @param {boolean} isValid - Whether the field is valid
 * @param {string} message - The error message
 */
function displayValidationResult(fieldName, isValid, message) {
    const inputElement = document.getElementById(fieldName);
    const errorElement = document.getElementById(`${fieldName}Error`);
    
    // Remove existing validation classes
    inputElement.classList.remove('is-valid', 'is-invalid');
    
    if (isValid) {
        inputElement.classList.add('is-valid');
        errorElement.textContent = '';
        errorElement.setAttribute('aria-live', 'off');
    } else {
        inputElement.classList.add('is-invalid');
        errorElement.textContent = message;
        errorElement.setAttribute('aria-live', 'polite');
    }
}

/**
 * Check if all form fields are valid
 * @returns {boolean} True if all fields are valid
 */
function isFormValid() {
    return Object.values(validationState).every(isValid => isValid === true);
}

/**
 * Validate all form fields
 * @returns {boolean} True if all fields are valid after validation
 */
function validateAllFields() {
    const fields = ['fullName', 'email', 'phone', 'password', 'confirmPassword'];
    
    // Validate each field
    fields.forEach(fieldName => {
        validateField(fieldName);
    });
    
    return isFormValid();
}

/**
 * Handle form submission
 * @param {Event} event - The form submission event
 */
function handleFormSubmission(event) {
    event.preventDefault();
    
    // Add loading state to submit button
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.classList.add('btn-loading');
    submitButton.disabled = true;
    
    // Validate all fields
    if (validateAllFields()) {
        // Simulate form processing
        setTimeout(() => {
            showSuccessMessage();
            resetForm();
            
            // Remove loading state
            submitButton.classList.remove('btn-loading');
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    } else {
        // Remove loading state immediately if validation fails
        submitButton.classList.remove('btn-loading');
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Focus on first invalid field
        focusFirstInvalidField();
    }
}

/**
 * Focus on the first invalid field
 */
function focusFirstInvalidField() {
    const fieldOrder = ['fullName', 'email', 'phone', 'password', 'confirmPassword'];
    
    for (const fieldName of fieldOrder) {
        if (!validationState[fieldName]) {
            document.getElementById(fieldName).focus();
            break;
        }
    }
}

/**
 * Show success message
 */
function showSuccessMessage() {
    successMessage.classList.remove('d-none');
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.add('d-none');
    }, 5000);
}

/**
 * Reset form to initial state
 */
function resetForm() {
    form.reset();
    
    // Reset validation state
    Object.keys(validationState).forEach(field => {
        validationState[field] = false;
    });
    
    // Remove validation classes and clear error messages
    const inputs = form.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
        error.setAttribute('aria-live', 'off');
    });
}

/**
 * Set up password visibility toggle functionality
 */
function setupPasswordToggle() {
    const toggleButtons = document.querySelectorAll('.password-toggle');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);
            const icon = this.querySelector('i');
            
            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
                this.setAttribute('aria-label', 'Hide password');
            } else {
                targetInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
                this.setAttribute('aria-label', 'Show password');
            }
        });
    });
}

/**
 * Utility function to debounce function calls
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Initialize the form validation system when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFormValidation);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateFullName,
        validateEmail,
        validatePhone,
        validatePassword,
        validateConfirmPassword,
        isFormValid,
        validationState
    };
}
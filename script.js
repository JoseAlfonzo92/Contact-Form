document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form fields
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message');
    const consent = document.getElementById('consent');

    let formIsValid = true;

    // Reset all error messages
    document.querySelectorAll('.error-message').forEach(function(msg) {
        msg.style.display = 'none';
    });

    // Validate fields
    if (!firstName.value.trim()) {
        firstName.nextElementSibling.style.display = 'block';
        formIsValid = false;
    }
    if (!lastName.value.trim()) {
        lastName.nextElementSibling.style.display = 'block';
        formIsValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = email.value ? "Please enter a valid email address" : "This field is required";
        email.nextElementSibling.style.display = 'block';
        formIsValid = false;
    }
    if (!queryType) {
        document.querySelector('.radio-group + .error-message').style.display = 'block';
        formIsValid = false;
    }
    if (!message.value.trim()) {
        message.nextElementSibling.style.display = 'block';
        formIsValid = false;
    }
    if (!consent.checked) {
        const errorMessage = consent.closest('.consent').querySelector('.error-message');
        errorMessage.style.display = 'block';
        formIsValid = false;
    }

    // If the form is valid, display the success message
    if (formIsValid) {
        // Remove any existing success message
        const existingSuccessMessage = document.getElementById('form-success');
        if (existingSuccessMessage) {
            existingSuccessMessage.remove();
        }

        // Generate the success message dynamically
        const formSuccess = document.createElement('div');
        formSuccess.id = 'form-success';
        formSuccess.className = 'form-success';
        formSuccess.setAttribute('role', 'alert');
        formSuccess.setAttribute('aria-live', 'assertive');

        const successHeader = document.createElement('div');
        successHeader.className = 'success-header';

        const successIcon = document.createElement('img');
        successIcon.src = 'assets/images/icon-success-check.svg';
        successIcon.alt = '';

        const successText = document.createElement('p');
        successText.textContent = 'Message Sent!';

        successHeader.appendChild(successIcon);
        successHeader.appendChild(successText);
        formSuccess.appendChild(successHeader);

        const successMessage = document.createElement('p');
        successMessage.textContent = "Thanks for completing the form. We'll be in touch soon!";
        formSuccess.appendChild(successMessage);

        // Insert the success message after the form
        this.insertAdjacentElement('afterend', formSuccess);
    }
});



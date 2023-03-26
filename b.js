const form = document.getElementById('registration-form');

function validateUsername() {
    const username = document.getElementById('username').value;
    const errorDiv = document.getElementById('username-error');
    
    if (username.length < 5 || username.length > 32) {
        errorDiv.innerHTML = 'Username should be between 5 to 32 characters.';
    } else {
        errorDiv.innerHTML = '';
    }
}

function validateAddress() {
    const address = document.getElementById('address').value;
    const errorDiv = document.getElementById('address-error');
    
    if (/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(address)) {
        errorDiv.innerHTML = 'Address should not contain any special characters.';
    } else {
        errorDiv.innerHTML = '';
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const errorDiv = document.getElementById('phone-error');
    
    if (!phone.startsWith("+92")) {
        errorDiv.innerHTML = 'Phone number should start with +92.';
    } else {
        errorDiv.innerHTML = '';
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    validateUsername();
    validateAddress();
    validatePhone();
    
    if (document.querySelectorAll('.error').length === 0) {
        form.submit();
    }
});

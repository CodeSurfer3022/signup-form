const form = document.querySelector('form[name="signup"]');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('input', validateInput));

function validateInput() {
    this.setCustomValidity('');

    switch (this.id) {
        case 'mail':
            validateMail.call(this);
            break;

        case 'country':
            validateCountry.call(this);
            break;

        case 'zipcode':
            validateZipcode.call(this);
            break;

        case 'password':
            validatePassword.call(this);
            break;

        case 'repassword':
            matchPasswords.call(this);
            break;
    }
}

const emailRegex = /\w+@[A-za-z]+\.[a-z]{2,3}/;

// validation functions
function validateMail() {
    console.log(this);
    if(this.checkValidity() && !emailRegex.test(this.value)) {
        this.setCustomValidity('Please enter a valid e-mail address');
    }
}

function validateCountry() {
    if(!this.checkValidity()) {
        this.setCustomValidity('Please enter a valid Country name. Numbers and ' +
            'special characters are not allowed');
    }
}

function validateZipcode() {
    if(!this.checkValidity()) {
        this.setCustomValidity('Please enter a valid Zipcode. A zip code has 6 digits');
    }
}

function validatePassword() {
    if(!this.checkValidity()){
        this.setCustomValidity('The password must be atleast 8 characters long,' +
            'have atleast 1 capital letter and 1 special character');
    }
}

function matchPasswords() {
    if(form.password.value !== this.value) {
        this.setCustomValidity('The passwords do not match');
    }
}


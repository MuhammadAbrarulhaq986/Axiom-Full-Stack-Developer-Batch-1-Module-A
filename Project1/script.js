const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All function
// Function to show error
function showError(input, massage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = massage;
}

// Function to show success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Function to check if email is true
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()) ) {
        showSuccess(input);
    } else {
        showError(input,`This is not a valid email`);
    }
}

//Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if ( input.value === '') {
            console.log(input.id);
            showError(input,`${getFieldId(input)} is required`);//like this  `${input.id} is required` *|OR|*  We can uses like this: input.id + 'is requried'
        } else {
            showSuccess(input);
        }
    });
}

// Function to check length of input fields
function checkLength(input, min, max) {
    if ( input.value.length < min ) {
        showError( input, `${getFieldId(input)} needs to be at least ${min} characters`);        
    } else if (input.value.length > max) {
        showError( input, `${getFieldId(input)} needs to be less then ${max} characters`);    
    } else {
        showSuccess(input);
    }
}

// Function to check the password and Conform password match
function checkpasswordMatch(input1,input2) {
    if ( input1.value !== input2.value ) {
        showError(input2, "Password don't match");
    }
}



// Function to get the ID of the input fields with proper case
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); // Cases  .toUpperCase(), .charAt()
}

// This is an event Listener for the form on submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);// We are using Array function Examples [Abrar, Asrar, Adil]
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkpasswordMatch(password, password2);
});

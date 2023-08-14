// We can use these type of chararters to save ID 
// var, let, const,

// we can use let like this
// let x = 1
// and  x = 2. in let we can change the values

// const we can't cahange the values
// const x = 2 is fixed

// Retrieving HTML elements form the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function is update class and massage for error
function showError(input, massage) {
    //Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //Replace the class - add error
    formControl.className = 'form-control error';
    //Get the small element for the error massage
    const small = formControl.querySelector('small');
    //Replace the text for small element using the input massage
    small.innerText = massage;
}

// function to update class for success
function showSuccess(input) {
    //Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    //Replace the class - add success
    formControl.className = 'form-control success';

}

//Events Listener 
//Create event listener for submit button 
//This is how  structure is made: function() {}; action is happen in this bracket {} 
form.addEventListener('submit', function (e) {
    //Stop the page from reloding on submit
    e.preventDefault();

    //Check to see if fields meet required field requirement
    //We Check the condition by this (), If this is true then we use this {}
    //check if the user name in empty. checking by this symboly ===
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    //check if the user name in empty. checking by this symboly ===
    if (email.value === '') {
        showError(email, 'Email is required');
    } else {
        showSuccess(email);
    }
    //check if the user name in empty. checking by this symboly ===
    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }
    //check if the user name in empty. checking by this symboly ===
    if (password2.value === '') {
        showError(password2, 'Conform Password is required')
    } else {
        showSuccess(password2);
    }
});


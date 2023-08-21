// // We can use these type of chararters to save ID 
// // var, let, const,

// // we can use let like this
// // let x = 1
// // and  x = 2. in let we can change the values

// // const we can't cahange the values
// // const x = 2 is fixed

// // Retrieving HTML elements form the DOM
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// // Function is update class and massage for error
// function showError(input, massage) {
//     //Get the parent element of the input field (.form-control)
//     const formControl = input.parentElement;
//     //Replace the class - add error
//     formControl.className = 'form-control error';
//     //Get the small element for the error massage
//     const small = formControl.querySelector('small');
//     //Replace the text for small element using the input massage
//     small.innerText = massage;
// }

// // function to update class for success
// function showSuccess(input) {
//     //Get the parent element of the input field (.form-control)
//     const formControl = input.parentElement;
//     //Replace the class - add success
//     formControl.className = 'form-control success';

// }

// //Events Listener 
// //Create event listener for submit button 
// //This is how  structure is made: function() {}; action is happen in this bracket {} 
// form.addEventListener('submit', function (e) {
//     //Stop the page from reloding on submit
//     e.preventDefault();

//     //Check to see if fields meet required field requirement
//     //We Check the condition by this (), If this is true then we use this {}
//     //check if the user name in empty. checking by this symboly ===
//     if (username.value === '') {
//         showError(username, 'Username is required');
//     } else {
//         showSuccess(username);
//     }
//     //check if the user name in empty. checking by this symboly ===
//     if (email.value === '') {
//         showError(email, 'Email is required');
//     } else {
//         showSuccess(email);
//     }
//     //check if the user name in empty. checking by this symboly ===
//     if (password.value === '') {
//         showError(password, 'Password is required')
//     } else {
//         showSuccess(password);
//     }
//     //check if the user name in empty. checking by this symboly ===
//     if (password2.value === '') {
//         showError(password2, 'Conform Password is required')
//     } else {
//         showSuccess(password2);
//     }
// });

///////////////////////////////////// JS Video part 2 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM (Document Object Model)
// Nodes
// Document
//     Doctype
//     html
//         head
//             // <head>
//             // <meta charset="UTF-8">
//             // <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             // <link rel="stylesheet" href="Style.css">
//             // <title>HTML Form</title>
//             // </head>
//          body


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
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// This is an event Listener for the form on submit
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Password2 is required')
    } else {
        showSuccess(password2);
    }


})

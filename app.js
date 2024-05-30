// Get all necessary elements e.g buttons, inputs
    // Global variables(can be accessed anywhere)
const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorIcon = document.querySelectorAll(".error_icon");
const errorText = document.querySelectorAll(".error_text");
const revealButton = document.querySelector('.reveal_password');

// write the logic
form.addEventListener('submit', (e) => {
  e.preventDefault();
// get the user input value 
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
 

// Check if user entered all required fields
    // Check first name

  if (fName === '') {
    firstName.classList.add('error');
    errorIcon [0].classList.remove("hide");
    errorText[0].classList.remove("hide");
    firstName.placeholder = '';
  } else {
    firstName.classList.remove('error');
    errorIcon [0].classList.add("hide");
    errorText[0].classList.add("hide");
  }
    // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorIcon [1].classList.remove("hide");
    errorText[1].classList.remove("hide");
    lastName.placeholder = '';
  } else {
    lastName.classList.remove('error');
    errorIcon [1].classList.add("hide");
    errorText[1].classList.add("hide");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorIcon [2].classList.remove("hide");
    errorText[2].classList.remove("hide");
    email.classList.add('input-error');
    email.placeholder = 'email@example/com';
  } else {
    email.classList.remove('error');
    errorIcon [2].classList.add("hide");
    errorText[2].classList.add("hide");
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorIcon [3].classList.remove("hide");
    errorText[3].classList.remove("hide");
    password.placeholder = '';
  } else {
    password.classList.remove('error');
    errorIcon [3].classList.add("hide");
    errorText[3].classList.add("hide");
    revealButton.classList.remove("hide")
  }
});

revealButton.addEventListener( "click", (e) => {
  if (password.type === 'password') {
      password.type = 'text';
      revealButton.classList.remove('fa-eye');
      revealButton.classList.add('fa-eye-slash');
  } else {
    password.type = 'password';
    revealButton.classList.remove('fa-eye-slash');
    revealButton.classList.add('fa-eye');
  }

}

);

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let err = document.getElementById("error");
let submitButton = document.querySelector(".submit-button");
let form = document.getElementById("form");

const checkValidation = (e) => {
  e.preventDefault();
  if (
    firstName.value === "" &&
    lastName.value === "" &&
    email.value === "" &&
    password.value === ""
  ) {
    alert("Need an input in order to submit the form.");
    err.innerHTML = "Please Enter a valid form.";
  } else if (/@/.test(email)) {
    alert("Please enter a valid email address.");
    err.innerHTML = "Wrong syntax of an email address.";
  } else if (password.length < 6) {
    alert("Password needs to be more than 5 characters long.");
  } else {
    err.innerHTML = "Form has been submitted.";
  }
};

form.addEventListener("submit", checkValidation);

// form.addEventListener("submit", function (event) {
//   const emailInput = document.getElementById("email");
//   const email = emailInput.value;

//   if (!/@/.test(email)) {
//     alert("Please enter a valid email address.");
//     event.preventDefault(); // prevent the form from submitting
//   }
// });

//K'Luk Code

// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   let message = [];
//   if (firstName.value === "" || firstName.value === null) {
//     message.push("Name is required");
//   }

//   if (message.length > 0) {
//     e.preventDefault();
//     err.innerHTML = message.join(",");
//   }
//   console.log(firstName);
// });

// const form = document.getElementById("form");
// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");
// const error = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   checkInputs();
// });
// function checkInputs() {
//   const fnameValue = fname.value.trim();
//   const lnameValue = lname.value.trim();
//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();
//   const confirmPasswordValue = confirmPassword.value.trim();
//   if (fnameValue === "") {
//     setErrorFor(fname, "First Name cannot be blank");
//   } else {
//     setSuccessFor(fname);
//   }
//   if (lnameValue === "") {
//     setErrorFor(lname, "Last Name cannot be blank");
//   } else {
//     setSuccessFor(lname);
//   }
//   if (emailValue === "") {
//     setErrorFor(email, "Email cannot be blank");
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, "Email is not valid");
//   } else {
//     setSuccessFor(email);
//   }
//   if (passwordValue === "") {
//     setErrorFor(password, "Password cannot be blank");
//   } else if (passwordValue.length < 8) {
//     setErrorFor(password, "Password must be at least 8 characters long");
//   } else {
//     setSuccessFor(password);
//   }
//   if (confirmPasswordValue === "") {
//     setErrorFor(confirmPassword, "Confirm Password cannot be blank");
//   } else if (confirmPasswordValue !== passwordValue) {
//     setErrorFor(confirmPassword, "Passwords do not match");
//   } else {
//     setSuccessFor(confirmPassword);
//   }
// }
// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector("small");
//   formControl.className = "input error";
//   small.innerText = message;
// }
// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = "input success";
// }
// function isEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }

// console.log(firstName.value);

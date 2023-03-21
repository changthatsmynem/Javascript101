// if (
//   firstName.value === "" &&
//   lastName.value === "" &&
//   email.value === "" &&
//   password.value === ""
// ) {
//   alert("Need an input in order to submit the form.");
//   err.innerHTML = "Please Enter a valid form.";
// } else if (firstName.value === "") {
//   alert("Please enter your first name.");
//   err.innerHTML = "Put something in your first name.";
// } else if (lastName.value === "") {
//   alert("Please enter your last name.");
//   err.innerHTML = "Put something in your first name.";
// } else if (!email.value.split("").includes("@")) {
//   alert("Please enter a valid email address.");
//   err.innerHTML = "Wrong syntax of an email address.";
//   if (email.value.split("").includes("a")) {
//     err.reset();
//   }
// } else if (password.value.length < 8) {
//   alert("Password needs at least 8 characters long.");
// } else {
//   err.innerHTML = "Form has been submitted.";
//   form.reset();
// }

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

// form.addEventListener("submit", function (event) {
//   const emailInput = document.getElementById("email");
//   const email = emailInput.value;

//   if (!/@/.test(email)) {
//     alert("Please enter a valid email address.");
//     event.preventDefault(); // prevent the form from submitting
//   }
// });

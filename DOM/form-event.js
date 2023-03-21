let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let err = document.getElementById("error");
let errBorder = document.getElementsByClassName("error");
let submitButton = document.querySelector(".submit-button");
let form = document.getElementById("form");
let reGex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValidation();
});

//validation function
const checkValidation = () => {
  //variable contains value input
  const fValue = firstName.value.trim();
  const lValue = lastName.value.trim();
  const eValue = email.value.trim();
  const pValue = password.value.trim();
  console.log(pValue);

  //If checks every input is not submit - Else if checks every input has met valid condition and can submit
  if (!(fValue || lValue || eValue || pValue)) {
    alert(`Cannot submit!!, if you don't have any input`);
  } else if (fValue && lValue && reGex.test(eValue) && pValue.length >= 8) {
    form.reset();
    // document.querySelectorAll("label").style.color = "black";
    // document.querySelectorAll("input").style.border = "1px solid #3a7b89";
    alert("YOUR FORM HAS BEEN SUBMITTED!!");
    location.reload();
  } //check every form has met the condition
  else {
    if (fValue === "") {
      errorMessage(firstName, "First Name cannot be blank");
    } else {
      successEvent(firstName);
    }
    if (lValue === "") {
      errorMessage(lastName, "Last Name cannot be blank");
    } else {
      successEvent(lastName);
    }
    if (eValue === "") {
      errorMessage(email, "Email cannot be blank");
    } else if (!isEmail(eValue)) {
      errorMessage(email, "Email is not valid");
    } else {
      successEvent(email);
    }

    if (pValue === "") {
      errorMessage(password, "Password cannot be blank");
    } else if (pValue.length < 8) {
      errorMessage(password, "Password must be at least 8 characters long");
    } else {
      successEvent(password);
    }
  }
};

const errorMessage = (input, msg) => {
  const formControl = input.parentNode;
  const errorInput = formControl.querySelector("#error");
  errorInput.innerText = msg;

  formControl.querySelector("label").style.color = "red";
  formControl.querySelector("input").style.border = "1px solid red";
};

const successEvent = (input) => {
  const formControl = input.parentNode;
  const errorInput = formControl.querySelector("#error");
  errorInput.innerText = "";

  formControl.querySelector("label").style.color = "green";
  formControl.querySelector("input").style.border = "1px solid green";
};

const isEmail = (input) => {
  return reGex.test(input);
};

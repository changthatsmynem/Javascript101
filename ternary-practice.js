const password = "pas$word";

password.length >= 12
  ? console.log("password is very strong so WELCOME!!")
  : password.length >= 8
  ? console.log("WELCOME!")
  : console.log("SORRY!! the password is too short");

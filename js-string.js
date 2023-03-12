//String
console.log("Hello World!");

let email = "donovanlak@gmail.com";
console.log(email);

let myAge = 30;

//string concatenation
let firstName = "Lak";
let lastName = "Donovan";

let fullName = firstName + " " + lastName;
console.log(fullName);

let info = `My name is ${fullName}`;
console.log(info);

//getting character
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods - this method will not change the original variable length
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
console.log(fullName);

//find index in the string
let index = email.indexOf("@"); //find the index of @ in email
console.log(index);

//find the last index of the last letter defind
let findLastIndex = email.lastIndexOf("o"); //
console.log(findLastIndex);

//slice the string (from,to)
let slice = email.slice(3, 10);
console.log(slice);

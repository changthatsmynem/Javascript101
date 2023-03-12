//true or false (0,1)

// Boolean(10 > 9) //true
// let  isApproved = false;

//boolean & comparison

//methods can return booleans
let email = "donovanlak@gmail.com";
let findLetter = email.includes("@"); //this check if the string include @ if yes will return true
console.log(findLetter);

let selectedFruits = ["Apple", "Banana", "Orange"];
let findFruits = selectedFruits.includes("Banana"); //this check if the string include
console.log(findFruits);

//comparison operators
// let age = 25;
// console.log(age ==25);
// console.log(age !=25);
// console.log(age >20);
// console.log(age <21);
// console.log(age <=25);
// console.log(age >=25);

let firstName = "lak";
console.log(firstName == "Lak");
console.log(firstName == "lAk"); //this is not the same above because it case sensitive
console.log(firstName > "Jack"); // alphabet order
console.log(firstName > "lak"); // lower case > upper case
console.log(firstName > "Jack"); // lower case still >

//loose comparison (different types can still be equal)
// let age = 25;
// console.log(age == 25);
// console.log(age == '25');//this will get true because JavaScript will convert string to number automatically

//strict comparison (different types can't be equal)
let age = 25;
console.log(age === 25);
console.log(age === "25"); //this will get false becasue check the type aswell

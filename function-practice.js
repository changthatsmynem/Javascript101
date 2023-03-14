// Declaration Function
myInfo("Jack");

function myInfo(name) {
  console.log("Hello" + " " + name);
}

// Expression Function (practice 'Hoisting' mechanic)
const info = function (name) {
  console.log("Hello" + " " + name);
};

info("John");

//Arrow Function
const callName = (name) => {
  console.log("Hello" + " " + name);
};

callName("Bowie");

//Arithmetic Practice in Functions
function addNumber(a, b) {
  return a + b;
}

console.log(addNumber(10, 14));

//Function kept as a variable
function calWithReturn(num1, num2) {
  return num1 + num2; //allow to install somewhere
}
const total = calWithReturn(5, 9);
console.log(total);

//then total can use later
function calUseReturn(total) {
  console.log(total * 5);
}
calUseReturn(total);

function cal(a) {
  console.log(a + 1);
}
cal(total);

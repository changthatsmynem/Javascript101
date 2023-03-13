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

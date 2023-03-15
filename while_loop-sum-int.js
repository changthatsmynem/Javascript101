// Exercise #3

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

let xValue = 20;
while (xValue > 0) {
  xValue -= 0.5;
  console.log(xValue);
}

// - Print all the odd numbers between 1 - 100.
let value = 1;
while (value <= 100) {
  if (value % 2 === 0) {
    value++;
    continue;
  } else {
    console.log(value);
  }
  value++;
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
let num = 0;
while (num < 6) {
  num++;
  console.log([num]);
}

// - Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190
let int = 0;
let sum = 0;
while (int <= 20) {
  sum += int;
  int++;
}
console.log(sum);

//best practice
const sumInt = (x) => (x * (x + 1)) / 2;
console.log(sumInt(20));

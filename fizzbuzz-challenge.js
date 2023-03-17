function fizzbuzz(n) {
  // Write your code here
  let arr = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzbuzz(16));

// Leave this line for testing:
module.exports = fizzbuzz;

//Another Solution
return [...Array(n)].map(
  (_, i) => (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i
);

//Another Possible Solution
arr.push((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
return arr;

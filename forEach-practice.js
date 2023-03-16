const letters = ["a", "b", "c", "d", "a", "c", "a"];
let count = {}; //create empty object to keep track the count
letters.forEach((item) => {
  if (count[item]) {
    //check if we have a letter in
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count);

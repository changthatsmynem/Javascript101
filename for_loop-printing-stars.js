// Exercise #2

// Use String Method .repeat()
// for (i = 0; i <= 5; i++) {
//   console.log("* ".repeat(i));
// }

// Nested For Loop
// for (i = 0; i <= 5; i++) {
//   let star = "";
//   for (j = 1; j <= i; j++) {
//     star += "*" + " ";
//   }
//   console.log(star);
// }

// Without Nested For Loop
const addStar = (x) => {
  let star = "";
  for (let i = 0; i < x; i++) {
    console.log((star += "* "));
  }
};
addStar(5);

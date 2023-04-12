//normal **
export function double(n) {
  return n * 2;
}

export function add(a, b) {
  return a + b;
}

// //multi **
// export function double (n){ //export in each one of them
//     return n*2;
// }

// export function add (a, b) {
//     return a + b;
// }

// //or use export{double,add} instead

// //export default
// export default function double (n){ //this function is default export for this module and can have only one default
//          return n*2;
//     }

//     function add (a, b) {
//      return a + b;
// }

//aggregate
export { substract } from "./class-and-module3.js"; //export to main by importing from './aggregate.js

//normal **
const double = (n) => n * 2;
module.exports = { double };

function add(a, b) {
  return a + b;
}

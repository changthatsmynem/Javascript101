//normal import

// import {double} from "./toExport.js";   //need { }
// console.log(double(5));

// //console.log(add(a, b)); //if un comment this will get an error

//multi - you can import all kinds of objects variable
import { double, add } from "./class-and-module2.js"; // with , in { } or you can rename like {double as doubleName}
console.log(double(5));
console.log(add(3, 2));

// //import all
// import * as allFunctions from "./toExport.js";
//  console.log (allFunctions.double(5));
//  console.log (allFunctions.add(6,2));

// //default import
// import doubleNum from "./toExport.js";   //this = {default as double}
// console.log(doubleNum(5));

// // console.log(add(a, b)); if uncomment this will get error say add is not defined

//aggregate
import { substract } from "./class-and-module2.js";
console.log(substract(5, 2));

//normal import
const { double, add } = require("./class-and-module.js");
console.log(double(5));
// console.log(add(a, b)); //if un comment this will get an error

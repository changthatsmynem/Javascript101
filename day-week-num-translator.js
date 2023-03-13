let dayNumber = Math.floor(Math.random() * 14);

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayMatchingNumber = (dayNumber) => {
  if (dayName[dayNumber]) {
    return dayName[dayNumber];
  } else {
    return "Invalid Day Number";
  }
};

console.log(dayMatchingNumber(dayNumber));

/* SWICTH CASE WAY */
// let dayMatchNum = "";

// switch (dayNumber) {
//   case 0:
//     dayMatchNum = "Sunday";
//     break;
//   case 1:
//     dayMatchNum = "Monday";
//     break;
//   case 2:
//     dayMatchNum = "Tuesday";
//     break;
//   case 3:
//     dayMatchNum = "Wednesday";
//     break;
//   case 4:
//     dayMatchNum = "Thursday";
//     break;
//   case 5:
//     dayMatchNum = "Friday";
//     break;
//   case 6:
//     dayMatchNum = "Saturday";
//     break;
//   default:
//     dayMatchNum = "Invalid Day Number";
//     break;
// }

// console.log(dayMatchNum);

/* CLASSIC WAY */
// let dayNumber = Math.floor(Math.random() * 7);

// if (dayNumber === 0) {
//   console.log("Sunday");
// } else if (dayNumber === 1) {
//   console.log("Monday");
// } else if (dayNumber === 2) {
//   console.log("Tuesday");
// } else if (dayNumber === 3) {
//   console.log("Wednesday");
// } else if (dayNumber === 4) {
//   console.log("Thursday");
// } else if (dayNumber === 5) {
//   console.log("Friday");
// } else if (dayNumber === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid Day Number");
// }

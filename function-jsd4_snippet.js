// Grade Prompt
const prompt = require("prompt-sync")();

function calculateGrade() {
  let score = Number(prompt("Enter your score: "));
  let grade = "";

  if (score >= 80) {
    grade = "You get grade A";
  } else if (score >= 70) {
    grade = "You get grade B";
  } else if (score >= 60) {
    grade = "You get grade C";
  } else if (score >= 50) {
    grade = "You get grade D";
  } else {
    grade = "You get grade F";
  }

  return grade;
}
console.log(calculateGrade());

// Time Prediction
const predictTime = (hour, min, nextMin) => {
  // get total minutes
  let totalTime = hour * 60 + (min + nextMin);
  console.log(
    `next time = ${Math.floor(totalTime / 60) % 24}:${(min + nextMin) % 60}`
  );
};

//Get Random Integer
const getRndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const x = getRndInt(1, 100);
const y = getRndInt(1, 50);

//BMI Calculator
function bmiCalculator(weight, height) {
  let bmi = ((weight / (height * height)) * 10000).toFixed(2);
  let text;
  if (bmi <= 18.5) {
    text = "Your BMI is " + bmi + ", you are underweight.";
  } else if (bmi > 18.5 && bmi < 25) {
    text = "Your BMI is " + bmi + ", you have a normal weight.";
  } else if (bmi >= 25) {
    text = "Your BMI is " + bmi + ", you are overweight.";
  } else {
    text = "Invalid Input";
  }
  return text;
}

console.log(bmiCalculator(65, 175));

//Cat Age
function catAge(years) {
  let catYears = 0;

  if (years === 1) {
    return 15;
  }
  if (years === 2) {
    return 25;
  }

  catYears = (years - 2) * 4 + 25;

  return catYears;
}

console.log(catAge(3));

//Rock, Paper, Scissors
const createRandomNumber = (upperBound) => {
  return Math.floor(Math.random() * upperBound);
};

const rockPaperScissors = () => {
  const randomNumber = createRandomNumber(3);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
    default:
      return "Invalid";
  }
};

console.log(rockPaperScissors());

//Response Message
const generateResponseMessage = () => {
  const randomNumber = createRandomNumber(4);
  switch (randomNumber) {
    case 0:
      return "Hello";
    case 1:
      return "Howdy";
    case 2:
      return "Sawasdee";
    case 3:
      return "Guten Tag";
    default:
      return "Invalid";
  }
};

console.log(generateResponseMessage());

//BMI v2
let height = prompt("Height(m)");
let weight = prompt("Weight(kg)");

const checkBMI = function bmi(height, weight) {
  if (height === "" || isNaN(height)) {
    return "ใส่ส่วนสูงหน่อยจั๊ฟ";
  } else if (weight === "" || isNaN(weight)) {
    return "ใส่น้ำหนักหน่อยจั๊ฟ";
  } else {
    let calBMI = weight / (height / 100) ** 2;
    if (calBMI < 18.5) {
      console.log("BMI = " + calBMI);
      return "ผอมจังจั๊ฟ";
    } else if (calBMI >= 18.5 && calBMI <= 22.99) {
      console.log("BMI = " + calBMI);
      return "คุณหุ่นดีจัง";
    } else if (calBMI >= 23 && calBMI <= 24.99) {
      console.log("BMI = " + calBMI);
      return "เริ่มบวมแล้วน๊า";
    } else if (calBMI <= 25 && calBMI <= 29.99) {
      console.log("BMI = " + calBMI);
      return "อ้วนอยู่นะ";
    } else {
      console.log("BMI = " + calBMI);
      return "อ้วนเกินไปแล้วนะจ๊ะ";
    }
  }
};
// const checkBMI = bmi(height,weight);
console.log(checkBMI(height, weight));

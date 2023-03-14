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

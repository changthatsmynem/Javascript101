// Challenge Yourself

// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1

// A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.

// Part 2

// A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3

// A student has a perfect grade if their score is 11. Add on to your function to print out "Perfect" for a score of 11.

const rubricGrading = (score) => {
  if (score <= 11 && score >= 0) {
    return score === 11
      ? console.log("Perfect")
      : score > 8
      ? console.log("Excellent")
      : score >= 5
      ? console.log(true)
      : console.log(false);
  } else {
    console.log("Cheating is not working, cause the ceiling is limiting!!");
  }
};

rubricGrading(10);

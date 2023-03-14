// Exercise #2

// Part 1

// Ed would like a way to input 3 names of his friends. The output should be a console greeting to his friends saying: Welcome {name1}, {name2}, {name3}.

const edFriends = (name1, name2, name3) => {
  console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
};

// Part 2

// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30

const ageFriends = (age) => new Date().getFullYear() - age;

// Part 3

// Ed would like to create a function that prints out, Welcome {name1}, you are {age1}. Welcome {name2}, you are {age2}. Welcome {name3}, you are {age3}.

const greetings = (name1, age1, name2, age2, name3, age3) => {
  console.log(
    `Welcome ${name1}, you are ${ageFriends(
      age1
    )}. Welcome ${name2}, you are ${ageFriends(
      age2
    )}. Welcome ${name3}, you are ${ageFriends(age3)}.`
  );
};

greetings("Thong", 200, "Smith", 1994, "Chit", 2000);

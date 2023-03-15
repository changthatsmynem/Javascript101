// Exercise #1

// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

const waitInLine = ["Sofia", "David", "Juan"];

console.log(waitInLine); // output: 'Sofia', 'David', 'Juan'

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

waitInLine.push("Sara", "Augustin");

waitInLine.shift();

console.log(waitInLine); // output: 'David', 'Juan', 'Sara', 'Augustin'

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

waitInLine.splice(1, 0, "Renata");
waitInLine.push("Elena");

console.log(waitInLine); // output: 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena'

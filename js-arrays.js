//example 1
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits)

// //example 2
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits[0]);

//example 3
//JavaScript is Dynamic -  Array can change (length) ADD

// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [3] = 'Pineapple';
// console.log(selectedFruits);

//example 4
//JavaScript is Dynamic -  Array can change - Data Type
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [3] = 'Pineapple';
// selectedFruits [4] = 5;
// console.log(selectedFruits);

//example 5 it can be replaced
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// selectedFruits [1] = 'Pear';
// concatenate(selectedFruits);

//example 6 length of the array
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// console.log(selectedFruits.length);

//array methods
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let join = selectedFruits.join(','); // Apple,Banana,Orange
// console.log(join);

//get index of
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let fruitIndex = selectedFruits.indexOf('Banana');
// console.log(fruitIndex);

//concatenate (join 2 arrays together)
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let concatFruits = selectedFruits.concat(['Strawberry', 'Grape']);
// console.log(concatFruits);

//push add new values into the array at the end
// let selectedFruits = ['Apple', 'Banana', 'Orange'];
// let pushFruits = selectedFruits.push('Raspberry');
// console.log(selectedFruits);

//pop removes the value from the end of the array
let selectedFruits = ["Apple", "Banana", "Orange"];
let popFruits = selectedFruits.pop();
console.log(selectedFruits); // this it will get the whole array
console.log(popFruits); //only the one that we pop out

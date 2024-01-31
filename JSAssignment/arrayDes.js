// arrayDes.js

// Creating an array of strings
const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Using destructuring to assign values to variables
const [firstFruit, secondFruit, ...restOfFruits] = fruits;

// Logging the values of the variables
console.log('First Fruit:', firstFruit);
console.log('Second Fruit:', secondFruit);
console.log('Rest of Fruits:', restOfFruits);

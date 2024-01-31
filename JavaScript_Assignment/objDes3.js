// Task 12: Array creation with default values and destructuring

// Creating an array with default values
const defaultValuesArray = [1, 2, 3];
const [, , defaultValue] = defaultValuesArray;

// Logging the extracted variable
console.log(defaultValue); // Output: 3



// Task 12: Array creation with default values and destructuring

// Creating an array with default values
const person = ["Rahul", "Deshmukh", 25, "Mumbai, India"];
const [firstName, lastName, age, city] = person;

// Logging the extracted variables
console.log(firstName + " " + lastName); // Output: Rahul Deshmukh
console.log(age);       // Output: 25
console.log(city);      // Output: Mumbai, India

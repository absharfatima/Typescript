// Task 4: Arrow function for multiplication
const multiply = (a, b) => a * b;

// Testing the arrow function with different contexts
console.log(multiply(5, 7)); // Output: 35
console.log(multiply(10, 5)); // Output: 50


// Task 5: Arrow function for sum
const add = (a, b) => a + b;

// Testing the arrow function with different contexts
console.log(add(10, 20)); // Output: 30
console.log(add(11, 11)); // Output: 22


// Task 6: Arrow function for division
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

// Testing the arrow function with different contexts
console.log(divide(15, 3)); // Output: 5
console.log(divide(10, 0)); // Output: "Cannot divide by zero"

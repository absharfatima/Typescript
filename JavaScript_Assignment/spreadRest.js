// Task 9: Using spread operator to merge arrays

// Merging two arrays using the spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];

console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6]

// Using the rest operator in a function to handle variable arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const result1 = sum(1, 2, 3, 4, 5);
console.log(result1);
// Output: 15

const result2 = sum(10, 20, 30);
console.log(result2);
// Output: 60

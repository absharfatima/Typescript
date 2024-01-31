// 1: Using WeakMap for Key-Value Pairs:

// Creating a WeakMap
const employeeDetails = new WeakMap();

// Creating objects as keys
const employee1 = { id: 1 };
const employee2 = { id: 2 };

// Storing key-value pairs in the WeakMap
employeeDetails.set(employee1, { name: 'Alice', age: 30 });
employeeDetails.set(employee2, { name: 'Bob', age: 25 });

// Retrieving values using keys
console.log(employeeDetails.get(employee1)); // Output: { name: 'Alice', age: 30 }
console.log(employeeDetails.get(employee2)); // Output: { name: 'Bob', age: 25 }

//-------------------------------------------------------------------------------------

// 2: Using WeakSet for Unique Values:
// Creating a WeakSet
const uniqueNumbers = new WeakSet();

// Adding unique values to the WeakSet
const number1 = { value: 42 };
const number2 = { value: 17 };

uniqueNumbers.add(number1);
uniqueNumbers.add(number2);

// Checking if a value is present in the WeakSet
console.log(uniqueNumbers.has(number1)); // Output: true
console.log(uniqueNumbers.has(number2)); // Output: true

// Adding the same value again (won't affect the WeakSet as it's weakly held)
uniqueNumbers.add(number1);

// Checking again
console.log(uniqueNumbers.has(number1)); // Output: true



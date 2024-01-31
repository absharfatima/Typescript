// Task 10: Object creation and destructuring

// Creating an object
const person = {
    firstName: "Johnson",
    lastName: "Smith",
    age: 25,
    city: "New York",
  };
  
  // Destructuring to extract specific properties into variables
  const { firstName, lastName, age } = person;
  
  // Logging the extracted variables
  console.log(firstName); // Output: Johnson
  console.log(lastName);  // Output: Smith
  console.log(age);       // Output: 25
  
// Task 11: Nested object creation and destructuring

// Creating a nested object
const student = {
    name: "Rohan",
    age: 20,
    address: {
      street: "123 Main St",
      city: "Pune",
      country: "India",
    },
    grades: {
      math: 90,
      science: 85,
      history: 95,
    },
  };
  
  // Destructuring to extract specific properties into variables
  const { name, age, address: { street, city, country }, grades: { math, science, history } } = student;
  
  // Logging the extracted variables
  console.log(name);        // Output: Rohan
  console.log(age);         // Output: 20
  console.log(street);      // Output: 123 Main St
  console.log(city);        // Output: Pune
  console.log(country);     // Output: India
  console.log(math);        // Output: 90
  console.log(science);     // Output: 85
  console.log(history);     // Output: 95
  
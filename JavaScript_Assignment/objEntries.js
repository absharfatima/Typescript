// Task 25: Using Object.entries() to iterate over key-value pairs

// Example object
const person = {
    name: 'Alisha',
    age: 30,
    city: 'Pune'
  };
  
  // Using Object.entries() to iterate over key-value pairs
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }
  
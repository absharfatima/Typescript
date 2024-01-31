// Task 7: Function with a default parameter value
function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
  }
  
  // Calling the function with both parameters
  greet("Ram", "Hi"); // Output: Hi, Ram!
  
  // Calling the function without the second argument (uses the default value)
  greet("Sita"); // Output: Hello, Sita!
  
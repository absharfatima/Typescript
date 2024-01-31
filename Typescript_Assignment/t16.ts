// Interface representing a dictionary with dynamic keys and values
interface Dictionary {
    [key: string]: any;
  }
  
  // Example usage
  const person: Dictionary = {
    name: "Johnson",
    age: 25,
    city: "Pune",
    isAdmin: false,
  };
  
  console.log(person.name);   // Output: Johnson
  console.log(person.age);    // Output: 25
  console.log(person.city);   // Output: Pune
  console.log(person.isAdmin); // Output: false
  

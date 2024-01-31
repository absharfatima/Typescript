// Tuple type representing a person's information: [name: string, age: number, address: string]
type PersonInfo = [string, number, string];

// Example usage
const person1: PersonInfo = ["Rajesh Mishra", 25, "Cityland, Pune"];

// Accessing individual elements with a different variable name
const personName: string = person1[0];
const personAge: number = person1[1];
const personAddress: string = person1[2];

console.log(personName);     // Output: Rajesh Mishra
console.log(personAge);      // Output: 25
console.log(personAddress);  // Output: Cityland, Pune

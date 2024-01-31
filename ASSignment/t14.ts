// Define an interface with several properties
interface MyInterface {
  name: string;
  age: number;
  address: string;
  email: string;
}

// Use keyof to create a type representing the keys of the interface
type MyInterfaceKeys = keyof MyInterface;

// Now, MyInterfaceKeys is a type that can only be one of the keys: 'name', 'age', 'address', or 'email'

// Example usage
const key: MyInterfaceKeys = 'name'; // Valid
const age: MyInterfaceKeys = 'age'; // Valid
const address: MyInterfaceKeys = 'address'; // Valid
const email: MyInterfaceKeys = 'email'; // Valid
//const invalidKey: MyInterfaceKeys = 'phone'; // Error: 'phone' is not assignable to MyInterfaceKeys

console.log(key); // Prints 'name'
console.log(age); // Prints 'age'
console.log(address); // Prints 'address'
console.log(email); // Prints 'email'
//console.log(invalidKey); // Prints undefined


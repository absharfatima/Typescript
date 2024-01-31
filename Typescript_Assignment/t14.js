// Now, MyInterfaceKeys is a type that can only be one of the keys: 'name', 'age', 'address', or 'email'
// Example usage
var key = 'name'; // Valid
var age = 'age'; // Valid
var address = 'address'; // Valid
var email = 'email'; // Valid
//const invalidKey: MyInterfaceKeys = 'phone'; // Error: 'phone' is not assignable to MyInterfaceKeys
console.log(key); // Prints 'name'
console.log(age); // Prints 'age'
console.log(address); // Prints 'address'
console.log(email); // Prints 'email'
//console.log(invalidKey); // Prints undefined

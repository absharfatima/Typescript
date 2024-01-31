// Original variable of type any
let value: any = "Hello, TypeScript!";

// Type assertion to convert it to string
let stringValue: string = value as string;

// Now you can use it as a string
console.log(stringValue.length); // Output: 18

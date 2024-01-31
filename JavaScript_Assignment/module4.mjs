// module4.mjs

// Importing named exports from m2opera
import greet, { multiply, divide } from './m2opera.mjs';

// Using the imported values
console.log(greet('Johnson')); // Output: Hello, Johnson!

const product = multiply(5, 5);
console.log(`Product: ${product}`); // Output: Product: 25

const quotient = divide(10, 5);
console.log(`Quotient: ${quotient}`); // Output: Quotient: 2

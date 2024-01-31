// module2.mjs

// Importing named values and the default value from m2opera
import greet, { multiply, divide } from './m2opera.mjs';

// Using the imported values
console.log(greet('Alice')); // Output: Hello, Alice!

const product = multiply(3, 5);
console.log(`Product: ${product}`); // Output: Product: 15

const quotient = divide(10, 2);
console.log(`Quotient: ${quotient}`); // Output: Quotient: 5

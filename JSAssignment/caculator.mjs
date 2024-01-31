// calculator.mjs

// Importing only the named exports from m2opera.mjs
//import greet, { multiply, divide } from './m2opera.mjs';

import { multiply, divide } from './m2opera.mjs';
import { addNumbers, subtractNumbers } from './addsubModule.mjs';

//console.log(greet('John'));

// Function that uses imported operations
export const calculate = (a, b) => {
  const sum = addNumbers(a, b);
  const subtract = subtractNumbers(a, b);
  const product = multiply(a, b);
  const quotient = divide(a, b);

  return { sum, subtract, product, quotient };
};

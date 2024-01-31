// Task 1
let variableWithLet = "Initial value for let";
const variableWithConst = "Initial value for const";

// Try reassigning a value to the const variable
// This will result in an error
// Uncommenting the line below will cause a TypeError (TypeError: Assignment to constant variable.)
// variableWithConst = "New value for const";

// Task 2
{
  let blockVariable = "Variable inside block with let";
  const constBlockVariable = "Variable inside block with const";
}
  // Try accessing the variables outside the block
  // This will result in a ReferenceError
  // Uncommenting the lines below will cause a ReferenceError(ReferenceError: blockVariable is not defined)
  // console.log(blockVariable);
  // console.log(constBlockVariable);


// Task 3
// Accessing variables before their declarations
// This will result in a ReferenceError for 'let' and 'const'

// console.log(letVariableBeforeDeclaration);   //ReferenceError: Cannot access 'letVariableBeforeDeclaration' before initialization
let letVariableBeforeDeclaration = "Let variable before declaration";

// console.log(constVariableBeforeDeclaration);  //ReferenceError: Cannot access 'constVariableBeforeDeclaration' before initialization
const constVariableBeforeDeclaration = "Const variable before declaration";

console.log(letVariableBeforeDeclaration); // This will work
console.log(constVariableBeforeDeclaration); // This will work

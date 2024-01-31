// Type guard function for checking if a variable is a string
function isString(value) {
    return typeof value === 'string';
}
// Example usage of the type guard function
function handleVariable(variable) {
    if (isString(variable)) {
        // Variable is a string
        console.log("The variable is a string: ".concat(variable.toUpperCase()));
    }
    else {
        // Variable is not a string
        console.log('The variable is not a string.');
    }
}
// Test cases
handleVariable("Hello World"); // Output: The variable is a string: HELLO WORLD!
handleVariable(42); // Output: The variable is not a string.

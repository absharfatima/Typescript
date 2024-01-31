// Function that takes a parameter which can be either a string or null/undefined
function processString(input) {
    if (input !== null && input !== undefined) {
        // Handle the case when the input is a string
        console.log("Processing string: ".concat(input));
    }
    else {
        // Handle the case when the input is null or undefined
        console.log("Input is null or undefined");
    }
}
// Example usage
processString("Hello, World!"); // Output: Processing string: Hello, World!
processString(null); // Output: Input is null or undefined
processString(undefined); // Output: Input is null or undefined

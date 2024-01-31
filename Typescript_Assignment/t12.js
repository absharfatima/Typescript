// Example usage
var combinedFunction = function (input) {
    if (typeof input === "number") {
        console.log("Received a number: ".concat(input));
    }
    else {
        console.log("Received a string: ".concat(input));
    }
};
// Test the combined function
combinedFunction(42); // Output: Received a number: 42
combinedFunction("hello"); // Output: Received a string: hello

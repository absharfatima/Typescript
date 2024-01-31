function inferReturnTypeBasedOnInput(input) {
    if (typeof input === "string") {
        return input.length; // Corrected to number
    }
    else if (Array.isArray(input)) {
        return (input.length > 0); // Corrected to boolean
    }
    else {
        // Handle other cases or throw an error if needed
        throw new Error("Unsupported input type");
    }
}
// Example usage
var resultForString = inferReturnTypeBasedOnInput("example");
var resultForArray = inferReturnTypeBasedOnInput([1, 2, 3]);
console.log(resultForString); // Output: 7 (length of the string)
console.log(resultForArray); // Output: true (array is not empty)

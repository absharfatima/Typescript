function funion(input) {
    if (typeof input === 'string') {
        console.log("It is a string: ".concat(input));
    }
    else {
        console.log("It is a number: ".concat(input));
    }
}
// Examples
funion("Hello"); // Output: It is a string: Hello
funion(42); // Output: Is is a number: 42

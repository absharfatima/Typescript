function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
// Example usage with arrays of different types
var stringArray = ["apple", "banana", "cherry"];
var numberArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true];
console.log(getFirstElement(stringArray)); // Output: "apple"
console.log(getFirstElement(numberArray)); // Output: 1
console.log(getFirstElement(booleanArray)); // Output: true

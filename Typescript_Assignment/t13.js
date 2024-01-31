// Example usage
var object1 = { id: 1, value: 42 };
var object2 = { name: "Example", description: "Sample object" };
// Function that accepts CombinedObject
function printObject(obj) {
    if ("id" in obj) {
        console.log("NumberObject: ID=".concat(obj.id, ", Value=").concat(obj.value));
    }
    else {
        console.log("StringObject: Name=".concat(obj.name, ", Description=").concat(obj.description));
    }
}
// Test the function with different objects
printObject(object1);
printObject(object2);

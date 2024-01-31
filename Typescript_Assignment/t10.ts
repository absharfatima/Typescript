type ReturnTypeBasedOnInput<T> = T extends string ? number : T extends any[] ? boolean : never;

function inferReturnTypeBasedOnInput<T>(input: T): ReturnTypeBasedOnInput<T> {
  if (typeof input === "string") {
    return input.length as ReturnTypeBasedOnInput<T>; // Corrected to number
  } else if (Array.isArray(input)) {
    return (input.length > 0) as ReturnTypeBasedOnInput<T>; // Corrected to boolean
  } else {
    // Handle other cases or throw an error if needed
    throw new Error("Unsupported input type");
  }
}

// Example usage
const resultForString: number = inferReturnTypeBasedOnInput("example");
const resultForArray: boolean = inferReturnTypeBasedOnInput([1, 2, 3]);

console.log(resultForString); // Output: 7 (length of the string)
console.log(resultForArray);  // Output: true (array is not empty)

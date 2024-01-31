type NumberFunction = (value: number) => void;
type StringFunction = (value: string) => void;

// Intersection of NumberFunction and StringFunction
type CombinedFunction = NumberFunction & StringFunction;

// Example usage
const combinedFunction: CombinedFunction = (input: number | string) => {
  if (typeof input === "number") {
    console.log(`Received a number: ${input}`);
  } else {
    console.log(`Received a string: ${input}`);
  }
};

// Test the combined function
combinedFunction(42);      // Output: Received a number: 42
combinedFunction("hello"); // Output: Received a string: hello

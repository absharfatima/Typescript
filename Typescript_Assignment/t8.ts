// Conditional type to check if a given type is an array
type IsArray<T> = T extends Array<any> ? true : false;

// Conditional assignment based on whether a variable is an array
type ResultType<T> = IsArray<T> extends true ? string[] : number;

// Example usage
const arrayVariable: string[] = ["one", "two", "three"];
const nonArrayVariable: number = 42;

// Conditional assignment based on whether the variable is an array or not
const resultArray: ResultType<typeof arrayVariable> = ["result"];
const resultNonArray: ResultType<typeof nonArrayVariable> = 42;

// Verify the types
console.log(resultArray);      // Output: ["result"]
console.log(resultNonArray);   // Output: 42

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
  }
  
  // Example usage with arrays of different types
  const stringArray: string[] = ["apple", "banana", "cherry"];
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const booleanArray: boolean[] = [true, false, true];
  
  console.log(getFirstElement(stringArray)); // Output: "apple"
  console.log(getFirstElement(numberArray)); // Output: 1
  console.log(getFirstElement(booleanArray)); // Output: true
  
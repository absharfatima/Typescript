// Class with a static method
class MathUtility {
    // Static method to calculate the square of a number
    static square(number) {
      return number * number;
    }
  }
  
  // Calling the static method without instantiating the class
  const result = MathUtility.square(5);
  
  // Logging the result
  console.log('Square of 5:', result); // Output: Square of 5: 25
  
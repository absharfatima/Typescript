function unique(array) {
    return array.reduce((uniqueArray, currentElement) => {
      // Use find to check if the current element is already in the uniqueArray
      const isUnique = !uniqueArray.find(element => element === currentElement);
  
      // If the current element is unique, add it to the uniqueArray
      if (isUnique) {
        uniqueArray.push(currentElement);
      }
  
      return uniqueArray;
    }, []);
  }
  
  // Example usage
  const result = unique([1, 1, 2, 3, 3, 2, 5, 4, 5, 2]);
  console.log(result); // Output: [1, 2, 3, 5, 4]
  
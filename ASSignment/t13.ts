// Interface representing an object with number properties
interface NumberObject {
    id: number;
    value: number;
  }
  
  // Interface representing an object with string properties
  interface StringObject {
    name: string;
    description: string;
  }
  
  // Union type representing the combination of NumberObject and StringObject
  type CombinedObject = NumberObject | StringObject;
  
  // Example usage
  const object1: CombinedObject = { id: 1, value: 42 };
  const object2: CombinedObject = { name: "Example", description: "Sample object" };
  
  // Function that accepts CombinedObject
  function printObject(obj: CombinedObject) {
    if ("id" in obj) {
      console.log(`NumberObject: ID=${obj.id}, Value=${obj.value}`);
    } else {
      console.log(`StringObject: Name=${obj.name}, Description=${obj.description}`);
    }
  }
  
  // Test the function with different objects
  printObject(object1);
  printObject(object2);
  
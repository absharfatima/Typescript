// Original interface
interface OriginalInterface {
    name: string;
    age: number;
    gender: string;
    phone: string;
  }
  
  // Mapped type to make all properties optional
  type OptionalProperties<T> = {
    [K in keyof T]?: T[K];
  };
  
  // Applying the mapped type to the original interface
  type OptionalExample = OptionalProperties<OriginalInterface>;
  
  // Example usage
  const optionalData: OptionalExample = {};
  optionalData.name = "Johnson";
  optionalData.phone = "1234567890";
  
  // gender is optional, so it can be omitted
  console.log("Optional Data:", optionalData);
  
  // Additional console logs to show the flexibility of optional properties
  console.log("Name:", optionalData.name); // Output: Johnson
  console.log("Age:", optionalData.age);   // Output: undefined (as it's optional) 
  console.log("Gender:", optionalData.gender); // Output: undefined (as it's optional)
  console.log("Phone:", optionalData.phone); // Output: 1234567890 
  
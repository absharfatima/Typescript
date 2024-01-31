type Person = {
    firstName: string;
    lastName: string;
    age: number;
  };
  
  type Address = {
    street: string;
    city: string;
    zipCode: string;
  };
  
  type ContactInfo = {
    email: string;
    phone: string;
  };
  
  type ComplexDataStructure = {
    person: Person;
    address: Address;
    contactInfo: ContactInfo;
  };
  
  // Example usage
  const data: ComplexDataStructure = {
    person: {
      firstName: "John",
      lastName: "Doe",
      age: 30,
    },
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345",
    },
    contactInfo: {
      email: "john@example.com",
      phone: "555-1234",
    },
  };
  
  console.log(data);
  
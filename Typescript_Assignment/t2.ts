// Interface for a person's name
interface PersonName {
    firstName: string;
    lastName: string;
  }
  
  // Interface for contact information
  interface ContactInfo {
    email: string;
    phone: string;
  }
  
  // Interface combining both using intersection
  interface Person extends PersonName, ContactInfo {}
  
  // Example usage
  const person: Person = {
    firstName: "Johnson",
    lastName: "Deere",
    email: "johnson@gmail.com",
    phone: "8976453478"
  };
  
  console.log(person);
  
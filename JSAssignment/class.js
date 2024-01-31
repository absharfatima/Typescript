// Task 13: Creating a Person class with properties, methods, and a static method

class Person {
    // Constructor to initialize instance properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Instance method
    introduction() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    // Static method
    static staticMethod() {
      return new Person("Sana", 25);
    }
  }
  
  // Creating an instance of Person
  const person1 = new Person("Alisha", 30);
  
  // Calling instance method
  person1.introduction();
  
  // Using the static method
  const person2 = Person.staticMethod();
  person2.introduction();
  
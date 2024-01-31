// Class-based Inheritance
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying.`);
    }
  }
  
  // Creating instances
  const person1 = new Person('Alice', 30);
  const student1 = new Student('Bob', 20, 'A');
  
  // Using methods
  person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.
  student1.introduce(); // Output: Hello, my name is Bob and I am 20 years old.
  student1.study(); // Output: Bob is studying.
  
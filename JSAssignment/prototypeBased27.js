// Prototype-based Inheritance
function PersonProto(name, age) {
    this.name = name;
    this.age = age;
  }
  
  PersonProto.prototype.introduce = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  function StudentProto(name, age, grade) {
    PersonProto.call(this, name, age);
    this.grade = grade;
  }
  
  // Setting up prototype chain
  StudentProto.prototype = Object.create(PersonProto.prototype);
  StudentProto.prototype.constructor = StudentProto;
  
  StudentProto.prototype.study = function () {
    console.log(`${this.name} is studying.`);
  };
  
  // Creating instances
  const person2 = new PersonProto('Alice', 30);
  const student2 = new StudentProto('Bob', 20, 'A');
  
  // Using methods
  person2.introduce(); // Output: Hello, my name is Alice and I am 30 years old.
  student2.introduce(); // Output: Hello, my name is Bob and I am 20 years old.
  student2.study(); // Output: Bob is studying.
  
// Task 26: Using the Array.prototype.find() method to locate an element in an array

// Example array of objects
const students = [
    { id: 1, name: 'Alice', grade: 85 },
    { id: 2, name: 'Bob', grade: 92 },
    { id: 3, name: 'Charlie', grade: 78 },
    { id: 4, name: 'David', grade: 95 }
  ];
  
  // Using the find() method to locate a student with a specific ID
  const studentToFind = 2;
  const foundStudent = students.find(student => student.id === studentToFind);
  
  // Logging the found student
  if (foundStudent) {
    console.log('Found Student:', foundStudent.name);     //Bob
  } else {
    console.log('Student not found.');
  }
  
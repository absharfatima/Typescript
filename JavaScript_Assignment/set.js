// Task 24: Using Set for operations

// Creating a Set to store unique values
const favoriteColors = new Set(['Red', 'Blue', 'Green']);

// Adding a new value to the Set
favoriteColors.add('Yellow');

// Checking existence in the Set
console.log('Is Green a favorite color?', favoriteColors.has('Green')); // Output: true
console.log('Is Purple a favorite color?', favoriteColors.has('Purple')); // Output: false

// Deleting a value from the Set
favoriteColors.delete('Blue');

// Logging the updated Set
console.log('Updated Favorite Colors Set:', favoriteColors);    // Updated Favorite Colors Set: Set(3) { 'Red', 'Green', 'Yellow' }

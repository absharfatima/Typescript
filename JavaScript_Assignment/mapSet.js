// Task 23: Using Set and Map

// Creating a Set to store unique values
const uniqueNumbersSet = new Set([1, 2, 3, 4, 5]);

// Creating a Map to associate keys with values
const keyValueMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

// Logging values from Set
console.log('Unique Numbers in Set:', uniqueNumbersSet);        // Unique Numbers in Set: Set(5) { 1, 2, 3, 4, 5 }

// Logging values from Map
console.log('Key-Value Pairs in Map:', keyValueMap);       // Key-Value Pairs in Map: Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

// Accessing values using keys from Map
console.log('Value for key1:', keyValueMap.get('key1')); // Output: 'value1'
console.log('Value for key2:', keyValueMap.get('key2')); // Output: 'value2'

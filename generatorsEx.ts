function* numberGenerator(): Generator<number, void, undefined> {
    let i = 0;
    while (true) {
        yield i++;
    }
}

// Create a generator object
const iterator = numberGenerator();

// Generate and print the first few numbers
console.log(iterator.next().value); // Output: 0
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2
// ...

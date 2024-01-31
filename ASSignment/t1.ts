function funion(input: string | number): void {                     //union : '|' pipe symbol
    if (typeof input === 'string') {
        console.log(`It is a string: ${input}`);
    } else {
        console.log(`It is a number: ${input}`);
    }
}

// Examples
funion("Hello"); // Output: It is a string: Hello
funion(42);       // Output: Is is a number: 42

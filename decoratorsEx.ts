function classDecorator(constructor: Function) {
    console.log(`Class decorator called on: ${constructor.name}`);
}

@classDecorator
class ExampleClass {
    // Class members and methods
}

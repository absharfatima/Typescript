interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound(): void {
        console.log("Woof");
    }
}

class Cat implements Animal {
    makeSound(): void {
        console.log("Meow");
    }
}

let dog: Animal = new Dog();
let cat: Animal = new Cat();

dog.makeSound(); // Output: Woof
cat.makeSound(); // Output: Meow

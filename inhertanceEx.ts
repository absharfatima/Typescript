class Animal {
    sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound(): void {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super("Woof");
    }
}

class Cat extends Animal {
    constructor() {
        super("Meow");
    }
}


let dog = new Dog();
dog.makeSound(); // Output: Woof

let cat = new Cat();
cat.makeSound(); // Output: Meow

var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.makeSound = function () {
        console.log("Meow");
    };
    return Cat;
}());
var dog = new Dog();
var cat = new Cat();
dog.makeSound(); // Output: Woof
cat.makeSound(); // Output: Meow

"use strict";
class Shape {
    displayArea() {
        console.log(`Area: ${this.calculateArea()}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);
circle.displayArea(); // Output: Area: 78.54

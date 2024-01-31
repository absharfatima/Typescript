"use strict";
class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
let shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
    console.log(shape.area());
});

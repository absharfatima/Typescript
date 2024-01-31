abstract class Shape {
    abstract calculateArea(): number;

    displayArea(): void {
        console.log(`Area: ${this.calculateArea()}`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(5);
circle.displayArea(); // Output: Area: 78.54

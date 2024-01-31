class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

let shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

shapes.forEach(shape => {
    console.log(shape.area());
});

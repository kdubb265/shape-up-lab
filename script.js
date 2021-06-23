const MAX = 600;
let container = document.getElementById('container');

// let squareInfo = document.getElementsByClassName('square');
let rectangleInfo = document.getElementsByClassName('rectangle');
// let circleInfo = document.getElementsByClassName('circle');
// let triangleInfo = document.getElementsByClassName('triangle');

let squareSide = document.getElementById("square-side-length");
let rectangleHeight = document.getElementById('rectangle-height');
let rectangleWidth = document.getElementById('rectangle-width');
let circleRadius = document.getElementById('circle-radius');
let triangleHeight = document.getElementById('triangle-height');

let rectangleButton = document.getElementById('rect-button');
let squareButton = document.getElementById('square-button');
let circleButton = document.getElementById('circle-button');
let triangleButton = document.getElementById('triangle-button');

// Input buttons
rectangleButton.addEventListener('click', function newRectangle() {
    new Rectangle(rectangleHeight.value, rectangleWidth.value);
    Rectangle.describe();
});
squareButton.addEventListener('click', function newSquare() {
    new Square(squareSide.value);
});
circleButton.addEventListener('click', function newCircle() {
    new Circle(circleRadius.value);
});
triangleButton.addEventListener('click', function newTriangle() {
    new Triangle(triangleHeight.value);
});



class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    draw() {
        if(this.width > 600 && this.height > 600) {
            return alert("Thats too large");
        } else if (this.width > 600) {
            return alert("No, no. You can't do that");
        } else if(this.height > 600) {
            return alert("Cant do that");
        };

        let x = Math.floor(Math.random() * (MAX - this.width));
        let y = Math.floor(Math.random() * (MAX - this.height));
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.height = `${this.height}px`;
        container.appendChild(this.div);
    };
    describe() {
        
    }
};

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.cssClass = 'rectangle';
        this.draw();
        
    };
};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.cssClass = 'square';
        this.draw();
    };
    
};

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.cssClass = 'circle';
        this.draw();
    };
};

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.cssClass = 'triangle';
        this.draw();
        this.div.style.width = '0';
        this.div.style.height = '0';
        this.div.style.borderBottomWidth = `${height}px`;
        this.div.style.borderRightWidth = `${height}px`;
    };
};
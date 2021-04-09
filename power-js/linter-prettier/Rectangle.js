class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }
  calcArea(units) {
    return this.height * this.width;
  }

  calcPerimeter() {
    var perimeter;
    perimeter = this.width * 2 + this.height * 2;
    return perimeter;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

// unused variable
const unused = 0;

const array = [1];

// Incorrect for directions
for (let i = 10; i < array.length; i--) {
  console.log(i);
}

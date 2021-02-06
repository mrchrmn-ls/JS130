class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [...arguments];
    this.sides.sort((a, b) => a - b);

    if (this.sides[0] < 0) {
      throw new Error("No negative length, please.");
    }

    if (this.sides[0] === 0) {
      throw new Error("No length of zero, please.");
    }

    if (!(this.sides[0] + this.sides[1] > this.sides[2])) {
      throw new Error("Lengths violate triangle inequality.")
    }
  }

  kind() {
    if (this.sides[0] === this.sides[2]) {
      return "equilateral";
    } 

    if (this.sides[1] === this.sides[2]) {
      return "isosceles";
    }

    return "scalene";
  }
}

module.exports = Triangle;
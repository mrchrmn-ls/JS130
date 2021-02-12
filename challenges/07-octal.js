class Octal {
  constructor(string) {
    if (string.match(/[^0-7]+/gi)) {
      this.octalNumber = "0"
    } else {
      this.octalNumber = string;
    }
  }

  toDecimal() {
    return this.octalNumber.split("")
                           .reverse()
                           .map(Number)
                           .reduce((total, digit, index) =>
                                    total + (digit * Math.pow(8, index)), 0);
  }
}

module.exports = Octal;
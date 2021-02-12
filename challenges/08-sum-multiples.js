class SumOfMultiples {
  constructor() {
    this.set = [...arguments];
  }

  static to(number, set = [3, 5]) {
    let multiples = [0];

    for (let count = 1; count < number; count += 1) {
      let isMultiple = false;
      set.forEach(divisor => {
        if (count % divisor === 0) isMultiple = true;
      });
      if (isMultiple) multiples.push(count);
    }

    return multiples.reduce((sum, multiple) => sum + multiple);
  }

  to(number) {
    return SumOfMultiples.to(number, this.set);
  }
}

module.exports = SumOfMultiples;
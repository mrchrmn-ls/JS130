class PerfectNumber {
  static classify(number) {
    if (number < 1) throw new Error ("Only positive numbers allowed.");

    let divisors = [];
    for (let div = 1; div <= Math.floor(number / 2); div += 1) {
      if (number % div === 0) divisors.push(div);
    }

    let sum = divisors.reduce((sum, divisor) => sum + divisor, 0);

    if (sum === number) return "perfect";

    if (sum < number) return "deficient";

    if (sum > number) return "abundant";

  }
}

module.exports = PerfectNumber;
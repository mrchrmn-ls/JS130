class Series {
  constructor(input) {
    this.digits = String(input);
  }

  slices(size) {
    if (size > this.digits.length) throw new Error();

    let result = [];
    for (let start = 0; start <= this.digits.length - size; start += 1) {  
      result.push(this.digits.substring(start, start + size)
                             .split("")
                             .map(str => Number(str)));
    }

    return result;
  }
}

module.exports = Series;
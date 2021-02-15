function numberFrom(char) {
  return char.toUpperCase().charCodeAt(0) - 64;
}

function charFrom(number) {
  return String.fromCharCode(64 + number);
}

class Row {
  constructor(length) {
    this.row = new Array(length).fill(" ");
  }

  _getCentreIndex() {
    return Math.floor(this.row.length / 2);
  }

  fill(number) {
    this.row[this._getCentreIndex() - number + 1] = charFrom(number);
    this.row[this._getCentreIndex() + number - 1] = charFrom(number);
  }

  getRow() {
    return (this.row.join("") + "\n");
  }
}

class Diamond {
  static makeDiamond(letter) {
    let diamond = "";
    let n = numberFrom(letter);
    let numberOfRows = (2 * n) - 1;

    for (let count = 1; count <= numberOfRows; count += 1) {
      let row = new Row(numberOfRows);
      row.fill(n - Math.abs(n - count));
      diamond += row.getRow();
    }

    return diamond;
  }
}

module.exports = Diamond;
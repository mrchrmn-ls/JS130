class Scrabble {
  static VALUES = {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10
  };

  static score(word) {
    let total = 0;

    for (let letters in Scrabble.VALUES) {
      let regex = new RegExp("[" + letters + "]", "gi");
      let matches = word.match(regex);
      if (matches !== null) {
        total += Scrabble.VALUES[letters] * matches.length;
      }
    }

    return total;
  }

  constructor(word) {
    this.word = word || "";
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;
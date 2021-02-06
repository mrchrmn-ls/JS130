class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(candidates) {
    return candidates.filter(candidate => this.isAnagram(candidate));
  }

  isAnagram(candidate) {
    candidate = candidate.toLowerCase();

    if (candidate.length !== this.word.length ||
        candidate === this.word) return false;

    if (this.word.split("").sort().join("") !==
        candidate.split("").sort().join("")) return false;

    return true;
  }
}

module.exports = Anagram;

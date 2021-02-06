class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(mutation) {
    if (this.strand === mutation) return 0;

    let comparisonLength = Math.min(this.strand.length, mutation.length);
    let distance = 0;

    for (let index = 0; index < comparisonLength; index += 1) {
      if (this.strand[index] !== mutation[index]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;
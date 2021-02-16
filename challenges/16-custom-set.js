class CustomSet {
  constructor(array = []) {
    this.set = array;
  }

  _getLength() {
    return this.set.length;
  }

  getArray() {
    return this.set;
  }

  isEmpty() {
    if (this.set.length === 0) return true;
    return false;
  }

  contains(number) {
    return this.set.includes(number);
  }

  isSubset(superset) {
    return this.set.every(number => superset.contains(number));
  }

  isDisjoint(otherSet) {
    return this.set.every(number => !otherSet.contains(number));
  }

  isSame(otherSet) {
    return this.isSubset(otherSet) &&
           this._getLength() === otherSet._getLength();
  }

  add(number) {
    if (!this.contains(number)) this.set.push(number);
    return this;
  }

  intersection(otherSet) {
    return new CustomSet(this.set.filter(number => otherSet.contains(number)));
  }

  difference(otherSet) {
    return new CustomSet(this.set.filter(number => !otherSet.contains(number)));
  }

  union(otherSet) {
    let unionSet = new CustomSet(this.set);
    otherSet.getArray().forEach(number => unionSet.add(number));
    return unionSet;
  }
}

module.exports = CustomSet;
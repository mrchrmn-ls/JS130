class Element {
  constructor(datum, next = null) {
    this.dat = datum;
    this.nxt = next;
  }

  datum() {
    return this.dat;
  }

  isTail() {
    return (this.nxt === null);
  }

  next() {
    return this.nxt;
  }
}

class SimpleLinkedList {
  constructor() {
    this.listSize = 0;
    this.listHead = null;
  }

  isEmpty() {
    return (this.listSize === 0);
  }

  size() {
    return this.listSize;
  }

  updateSize(amount) {
    this.listSize += amount;
  }

  head() {
    return this.listHead;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
  }

  push(datum) {
    let element = new Element(datum, this.head());
    this.listHead = element;
    this.updateSize(1);
  }

  pop() {
    let popped = this.head();
    this.listHead = this.head().next();
    this.updateSize(-1);
    return popped.datum();
  }

  toArray() {
    let array = [];
    let current = this.head();
    while (current !== null) {
      array.push(current.datum());
      current = current.next();
    }
    return array;
  }

  reverse() {
    return SimpleLinkedList.fromArray(this.toArray().reverse());
  }

  static fromArray(array) {
    let list = new SimpleLinkedList();
    if (array !== null) array.slice()
                             .reverse()
                             .forEach(datum => list.push(datum));
    return list;
  }
}

module.exports = { SimpleLinkedList, Element };
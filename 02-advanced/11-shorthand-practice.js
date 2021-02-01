function shorty(...strings) {
  return {
    first: strings[0],
    middle: strings.slice(1,4).sort(),
    last: strings[4]
  };
}

let { first, middle, last } = shorty("one", "two", "three", "four", "five");
console.log(middle);
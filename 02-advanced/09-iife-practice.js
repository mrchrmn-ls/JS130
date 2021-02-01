var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
}(numbers));

console.log(sum);

(function (start) {
  for (let number = start; number >= 0; number -= 1) {
    console.log(number);
  }
})(7);


let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

(function countdown(start) {
  console.log(start);
  if (start > 0) {
    countdown(start - 1);
  }
})(7);
function myBind(func, context) {
  let partialArgs = Array(...arguments).slice(2);

  return function() {
    return func.call(context, ...partialArgs, ...arguments);
  };
}


function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15
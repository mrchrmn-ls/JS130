function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
      stack.pop();
    },

    printStack() {
      console.log(stack);
    }
  };
}
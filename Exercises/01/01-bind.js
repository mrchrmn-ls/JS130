function myBind(func, context) {
  return function() {
    func.call(context, ...arguments);
  };
}

let obj = {
  name: "Marc"
};

function nameMe(num) {
  for (let i = 0; i < num; i += 1) {
    console.log(this.name);
  }
}

let bound = myBind(nameMe, obj);

bound(2);
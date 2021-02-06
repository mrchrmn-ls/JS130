function delegate(obj, method, ...args) {
  return function() {
    return obj[method](...args);
  };
}

let foo = {
  name: 'test',
  bar: function(greeting, title) {
    console.log(greeting + ' ' + title + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello', 'mister'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() {
  console.log('changed');
};

baz.qux();          // logs 'changed'
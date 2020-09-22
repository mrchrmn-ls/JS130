"use strict";

function makeMultipleLister(base) {
  return function() {
    let multiple = 1;
    while (base * multiple < 100) {
      console.log(base * multiple);
      multiple += 1;
    }
  };
}

let lister = makeMultipleLister(17);
lister();

let total = 0;

function add(number) {
  total += number;
}

function subtract(number) {
  total -= number;
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

console.log(total);

function later(func, arg) {
  return function() {
    func(arg);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!

function later2(func, arg) {
  return function(secondArg) {
    func(arg, secondArg);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


function bind(context, func) {
  return function() {
    func.call(context);
  };
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj);
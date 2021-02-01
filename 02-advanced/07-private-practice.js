/* eslint-disable max-lines-per-function */
function makeCounterLogger(start) {
  return function(finish) {
    let step = start < finish ? 1 : -1;
    for (let count = start; count !== finish + step; count += step) {
      console.log(count);
    }
  };
}

/*
let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);
*/

function makeList() {
  let items = [];

  return function list(str) {
    if (str === undefined) {
      if (items.length === 0) {
        console.log("The list is empty.");
        return;
      } else {
        items.forEach(item => console.log(item));
        return;
      }
    }

    let itemIndex = items.lastIndexOf(str);
    if (itemIndex === -1) {
      items.push(str);
      console.log(`${str} added!`);
    } else {
      items.splice(itemIndex, 1);
      console.log(`${str} removed!`);
    }

  };
}

/*
let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");
list();
*/

function makeAPIList() {
  return {
    items: [],

    list() {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach(item => console.log(item));
      }
    },

    add(item) {
      this.items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let itemIndex = this.items.lastIndexOf(item);
      this.items.splice(itemIndex, 1);
      console.log(`${item} removed!`);
    }
  };
}


/*
let list = makeAPIList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
console.log(list.items);
*/

function makePrivateAPIList() {
  let items = [];

  return {
    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    },

    add(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove(item) {
      let itemIndex = items.lastIndexOf(item);
      items.splice(itemIndex, 1);
      console.log(`${item} removed!`);
    }
  };
}

let list = makePrivateAPIList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();
console.log(list.items);

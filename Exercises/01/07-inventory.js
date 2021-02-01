"use strict";

function CreateItem(name, category, quantity) {
  let notValid = false;

  if (name.split(" ").join("").length < 5) notValid = true;

  if (category.includes(" ") || category.length < 5) notValid = true;

  if (!quantity) notValid = true;

  if (notValid) return { notValid };

  return {
    sku: name.split(" ").join("").substring(0, 3) + category.substring(0, 2),
    name,
    category,
    quantity
  };
}

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let newItem = CreateItem(name, category, quantity);
    if (newItem.notValid) return false;
    this.items.push(newItem);
    return true;
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(cat) {
    return this.items.filter(item => item.category === cat);
  },

  update(code, obj) {
    Object.assign(this.items.filter(item => item.sku === code)[0], obj);
  },

  delete(code) {
    let deleteIndex = -1;
    this.items.forEach((item, index) => {
      if (item.sku === code) deleteIndex = index;
    });
    this.items.splice(deleteIndex, 1);
  }
};

let ReportsManager = {

  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    let stockedItems = [];
    this.items.inStock().forEach(item => stockedItems.push(item.name));
    console.log(stockedItems.join());
  },

  createReporter(code) {
    
  }
}
/* eslint-disable max-lines-per-function */

let ItemManager = (function() {
  let itemList = [];

  function CreateItem(name, category, quantity) {
    let notValid = false;

    if (name.split(" ").join("").length < 5) notValid = true;

    if (category.includes(" ") || category.length < 5) notValid = true;

    if (quantity === undefined) notValid = true;

    if (notValid) return { notValid };

    return {
      sku: name.split(" ").join("").substring(0, 3) + category.substring(0, 2),
      name,
      category,
      quantity
    };
  }

  return {
    items: itemList,

    create(name, category, quantity) {
      let newItem = CreateItem(name, category, quantity);
      if (newItem.notValid) return false;
      itemList.push(newItem);
      return true;
    }
  };

})();

console.log(ItemManager);

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;
console.log(ItemManager);
/*

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10*/
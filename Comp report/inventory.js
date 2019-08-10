var Inventory = [];

function Item(make, model, cost) {
    this.make = make;
    this.model = model;
    this.cost = cost;

    console.log(Item);
}

function registerItem() {
    var make = document.getElementById("make");
    var model = document.getElementById("model");
    var cost = document.getElementById("cost");

    var newItem = new Item(make.value, model.value, cost.value);
    console.log(newItem);

    Inventory.push(newItem);
    console.log("Item saved to array!")

    listItem(newItem);

    function listItem() {
        var list = document.getElementById("inventoryList");
        var li = document.createElement('li');
        li.innerText = newItem.make + " " + newItem.model + " $" + newItem.cost;
        li.classList.add("item-list");
        
        list.appendChild(li);
    }
}
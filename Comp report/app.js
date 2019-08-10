// create an object constructor for new inventory items
function Item(name, make, model, description, type) {
    this.name = name;
    this.make = make;
    this.model = model;
    this.description = description;
    this.type = type;

    console.log(name, make, model, description, type);


}

function registerItem() {
    var itemName = document.getElementById("itemName");
    var itemMake = document.getElementById("make");
    var itemModel = document.getElementById("model");
    var itemDescription = document.getElementById("description");
    var itemType = document.getElementById("itemType").value;
    var test = "this works";
    var item = new Item(itemName.value, itemMake.value, itemModel.value, itemDescription.value, itemType.value);
    console.log(item);
    // add inventory item to the array
    Inventory.push(item);
}

// create a ul of all current inventory items
function listInventory() {
    Inventory.forEach(function (item) {
        var list = document.getElementById('inventory');
        ul.appendChild(list);
        list.innerHTML += item.name, item.type;
    });
}

// remove an item from the array

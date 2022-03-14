//36-3 Keys, values, entries, delete, seal, freeze

const bottle = { 
    color: "yellow",
    hold: "water", 
    price: 50,
    isCleaned: true,
    cantBeDeleted: true
};

//getting all properties names
//=================================================
const keys = Object.keys(bottle);
console.log(keys);

//get all values
//=================================================
const values = Object.values(keys);
console.log(values);

//getting pairs(key and values together)
//=================================================
//this output will give 2 dimensional array
const pairs = Object.entries(bottle);
console.log(pairs);

//deleting a property and its value
//=================================================
delete bottle.isCleaned;
console.log(bottle);

//seal: the property can't be deleted if we use this method.
//can't be deleted any property.
//can't be insert new property.
//can be modify of new property
//=================================================

//can't be deleted
Object.seal(bottle);
//for check
delete bottle.cantBeDeleted;
console.log(bottle);

//but can be changed
bottle.cantBeDeleted = false;
//for check
console.log(bottle);

//also can't be added any property
bottle.height = 12;
//for check
console.log(bottle);

//freeze:
//can't be deleted any property.
//can't be insert new property.
//can't be modify of new property
//=================================================
//can't be modified/change, adding new property and deleted.
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 16;

//for check
console.log(bottle);


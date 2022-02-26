//36-4 Loop through an object using for in, for of, object entries.

const bottle = { 
    color: "yellow",
    hold: "water", 
    price: 50,
    isCleaned: true,
    cantBeDeleted: true
};

/* 

for(let i = 0; i < 10; i++){}
for(const num of numbers){} //array
for(const prop in student){} //object
*/

//to access object value
//objectName.property
//objectName["property"]
//objectName[expression]

//key and value together
//system-1**********************
//==============================================
for(const prop in bottle){
    console.log(prop, bottle[prop]);
}
//system-2
const keys = Object.keys(bottle);
for (const prop of keys){
    console.log(prop, bottle[prop]);
}
//advanced //system-3
const entries = Object.entries(bottle)
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}

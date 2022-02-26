//36-5 (advanced) Compare objects, referential integrity

const first = {a:1, b:2};
const second = {a:1, b:2};
const third = first

//comparison happen when object is taking the same memory space. that way first and second can't be compared but first and third can be compared.

if(first === third){
    console.log("objects are equal");
}
else {
    console.log("Objects are different");
}

//Bangle way to compare
//====================================================
//converting object stringify
console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if( JSON.stringify(first) == JSON.stringify(second)){
    console.log("these are equal");
}
else( 
    console.log("these are not equal")
)

//if the property shift to another place, the JSON equal is not work
const fifth = {a:1, b:2};
const forth = {b:2, a:1};

if(JSON.stringify(fifth) === JSON.stringify(forth)){
    console.log("these are equal");
}
else {
    console.log("these are not equal");
}

//comparing 2 object.
function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop])
        return false;
    }
    return true
}

console.log(compareObjects(fifth,forth));

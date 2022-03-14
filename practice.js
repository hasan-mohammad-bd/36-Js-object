//creating object with new 
const person = new Object()

//inherent object.
const theMan = {
    name : "Hasan",
    address: "Barisal" }

const person2 = Object.create(theMan)
console.log(person2.name);

const details = `
his name is ${person2.name}. he lives in ${person2.address}
`
console.log(details);

//creating object with class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

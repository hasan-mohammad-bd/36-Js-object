//36-1 Module introduction Different way to Create Object

//using object literal
//===================================================
const student = {name: "Sakab", job: "cricket"};

//declaring object as constructor
//===================================================
const person = new Object();

//3. inherent 
//===================================================
//here human will get the student property.
//const human = Object.create(null);
const human = Object.create(student)
console.log(human.job);

//4. Creating object with class
//===================================================
//initially it was created by function but after 2015, the new version has come to make it with class. 
class People {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

const peop = new People("Manus", 12);
console.log(peop);

//Creating Class with function
//===================================================
//not use anymore, class is more useable then function.

function Manus(name){
    this.name = name;
}

const man = new Manus("kader");
console.log(man);
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

const people3 = new People("Manus", 12);
console.log(people3);


//object method.
//====================================
const student = {
    name: "Hasan",
    money: 5000,
    major: "math",
    hobby: "cycling",
    friends: {
        name: "San",
        subject: "math",
        money: 5000,
        hobby: "swimming"
    },
    takeExam: function(){
        console.log(this.name, "taking exam");
    },
    treatDay : function(expense, baksis){
        this.money = this.money - expense - baksis;
        return this.money;
    }
    
}

student.takeExam();

const remaining = student.treatDay(900,100);
const remaining2 = student.treatDay(900,100);
console.log(remaining);
console.log(remaining2);

//Object keys.
const bottle = { 
    color: "yellow",
    hold: "water", 
    price: 50,
    isCleaned: true,
    cantBeDeleted: true
};

const keys = Object.keys(bottle)
console.log(keys);

console.log(bottle);

const value = Object.values(bottle)
console.log(value);
value.forEach(theValue => console.log(theValue))

const pairs = Object.entries(bottle)
console.log(pairs);

//deleting property.

delete bottle.isCleaned;
console.log(bottle);

Object.seal(bottle);

//loop through an object.

const bottle1 = { 
    color: "yellow",
    hold: "water", 
    price: 50,
    isCleaned: true,
    cantBeDeleted: true
};

//key value together 

for(const thePair in bottle1){
    console.log(thePair, bottle[thePair]);
}
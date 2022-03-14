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
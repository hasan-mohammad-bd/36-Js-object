//36-6 (advanced) Use bind to borrow method from another object


//using a method in another object with bind method.
//========================================================
const kibria = {
    id:101,
    name:"RJ Kibria",
    money: 5000,

    treatDey: function(expense){
        this.money = this.money - expense;
        console.log("here",this);
        return this.money;
        
    }
}

//-1
const heroBalam = {
    id: 102,
    money: 6000,
    nam: "hero blam",

} 

//-2
const normalGolam = {
    id: 102,
    money: 8000,
    nam: "hero blam",

} 


//here heroBalam is using as a argument of parameter this 
const heroTreatDay = kibria.treatDey.bind(heroBalam)
const heroTreatDay2 = kibria.treatDey.bind(normalGolam)
//-2
heroTreatDay2(100)
//-1
heroTreatDay(500);
heroTreatDay(500);
heroTreatDay(500);

//-0 //normal way not bind
kibria.treatDey(100);
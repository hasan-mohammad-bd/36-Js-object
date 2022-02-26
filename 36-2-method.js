//36-2 Object method property review

const student = {
    id:101,
    name:"RJ Kibria",
    money: 5000,
    major: "math",
    isReach: false,
    subjects: ["english", "economics"],
    bestFriend: {
        name: "kundu",
        major: "math"
    },
    //this is called method, "this." is used for accessing this object property.
    takeExam: function(){
        console.log(this.name, "taking exam");
    },
    treatDey: function(expense, boksis){
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student.takeExam();

const remaining = student.treatDey(900,100);
const remaining2 = student.treatDey(900,100);
console.log(remaining);
console.log(remaining2);

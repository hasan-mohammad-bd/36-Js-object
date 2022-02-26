//6-7 (advanced) Difference between bind, call and apply


const kibria = {
    id:101,
    name:"RJ Kibria",
    money: 5000,

    treatDey: function(expense, boksis, tax){
        this.money = this.money - expense - boksis -tax;
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
//call
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 100, 30);


//with apply
kibria.treatDey.apply(heroBalam,[500,100,50]);
kibria.treatDey.apply(heroBalam,[1000,200,100]);

//interview question*******************************
//different between bind vs call vs apply**********
//bind: bind call the function and create new function, by calling the new function, other object method/function can be used.
//call: with call, function/method can be directly applied, the parameter can be added with ",".
//apply: function/method can be directly applied but parameter can be added within a array.
//************************************************* */

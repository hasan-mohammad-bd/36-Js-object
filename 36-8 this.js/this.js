//this = window in consol 
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
//************************************** */
//the object function will take its left sided variable, or any thing of left sided, it can be windows if it is written in the browser.

//if "this" are called by a function, in browser console, window will be addressed.
//if "this" are called by itself, the element will be addressed where "this" is mentioned.

//this is execution context.
//regular method take left sided as a context.
//if there is arrow function the context will be according to upper section.
//in event handler, it depends on the function how function is calling the,
//arrow function can't hold the "this" value, 
//************************************ */
// browser me implementation kaise hogi ye browser ke engine ke upar depend karta hai. Jaise ki chrome, firefox, safari, etc. Sabhi browser
//  ke engine alag hote hain aur unka implementation bhi alag hota hai.


//engine me depend karta hai kaise store hota hai, kaise execute hota hai, kaise memory allocate hoti hai, etc.

function greet(){
    conole.log("Hello Coder Army");
    console.log("Mera naam rishabh hai");
}
greet();


function sum(number1, number2){    //parameter
    console.log(number1+number2);
}
sum(3,4); //argument


//agar hum return use karte hain to function ke andar ka value bahar aa jata hai aur hum usko kisi variable me store kar sakte hain.

const fun=function(){                       //ye fun iss function ke reference ko store kar raha hai. aur ye store hine heap me
    console.log("Hello Coder Army");
    console.log("Mein toh badiya hu");
}
// fun();
console.log(fun());  //ye undefined return karega kyuki function ke andar koi return statement nahi hai.
                    //  aur agar hum return statement use karte hain to function ke andar ka value bahar aa jata hai aur hum usko kisi variable me store kar sakte hain.





// *****************************************************ARROW FUNCTION*******************************************************
// arrow function me hum function ke andar ka value return kar sakte hain aur usko kisi variable me store kar sakte hain.
//arrow function is a shorter syntax for writing function expressions. It is introduced in ES6 (ECMAScript 2015) and provides a more concise way to write functions.


const func =()=>{
    console.log("Hello baccho");
} 
func();


const sum = (number1, number2) =>{
    return number1+number2;
}

const sum = (number1, number2) => number1+number2;  

console.log(sum(3,4));


//REST OPERATOR
const sum = (...numbers)=>{
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8,9,10); 
sum(1,6,7,8,9,10); 


// *******************************************************************REST OPERATOR AND SPREAD OPERATOR**********************************************************************

// rest aur spread operator me difference ye hai ki rest operator function ke andar use hota hai aur spread operator array ke andar use hota hai. 
    //spread example
    let arr = [2,3,4,5];
    let arr2 = [...arr,6,7,8,9,10]; // ye hai spread operator. Ye array ke andar multiple elements ko ek array me store kar raha hai

  // Rest operator me hum function ke andar multiple arguments ko ek array me store kar sakte hain aur spread operator me hum array ke andar multiple elements ko ek array me store kar sakte hain.




let obj = {
    name: "Rohit",
    age:30,
    amount:420,
}

function fun(obj){
    console.log(obj.name , obj.amount);
}
fun(obj);


//we can destructure the object and get the values of the properties directly. This is called object destructuring.
function fun({name,amount}){        //poore parameter se hme sirf name aur amount chahiye to hum object destructuring ka use kar sakte hain.
    console.log(name , amount);
}
func(obj);


const {name , amount} = obj;
console.log(name,amount);

// jab hum string ko new keyword se create karte hain to wo string object ban jata hai. aur jab hum string ko directly create karte hain to wo 
    //  string primitive ban jata hai.

// Function._prototype_ is a property of the Function constructor that allows you to add methods and properties to all functions in JavaScript.

// fun.__proto__  == Function.prototype  //ye dono same hai. ye dono function ke prototype ko point karte hain. 
//                  aur ye dono function ke prototype me methods aur properties ko add karne ke liye use hote hain.

// fun.__proto__.__proto__ == Object.prototype  //ye dono same hai. ye dono object ke prototype ko point karte hain.

// fun.__proto__.__proto__.__proto__ == null  //ye null hai. ye isliye hai kyuki Object.prototype ke prototype me koi aur prototype nahi hai.


// Heap ke andar ka memory allocation object ke liye hota hai aur stack ke andar ka memory allocation function ke liye hota hai.
// heap me memory allocation dynamic hota hai aur stack me memory allocation static hota hai.
// 




// changin prottype of object 

let obj = {
    name: "Rohit",
    age:30,
    amount:420,
}

let obj2 = {
    name: "Rishabh",
    age:25,
    amount:500,
}

obj2.__proto__ = obj;  //ye obj2 ke prototype ko obj ke prototype se point kar raha hai. aur ab obj2 ke andar name, age, amount properties nahi hai to ye obj ke andar se le lega.
console.log(obj2.name);
//  this is costly used in javascript to implement inheritance.


// inplace of this use  this 
obj2=Object.create(obj);  //ye obj2 ke prototype ko obj ke prototype se point kar raha hai. aur ab obj2 ke andar name, age, amount properties nahi hai to ye obj ke andar se le lega.
console.log(obj2.name);


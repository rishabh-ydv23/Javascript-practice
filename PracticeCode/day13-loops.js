switch(new Date().getDay()){
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a Valid Day");
}


//switch me strict comparison hota hai. === operator ka use hota hai. isliye case me humne string ke andar number ko likha hai. 
    // agar humne number ke andar number likha hota to wo match nahi karta aur default case execute hota.



for(let i=0;i<20;i++){
    console.log("Hello Coder Army")
}

// if u give const i=0; i<20; i++  then it will give error because const variable cannot be reassigned.

//cpp is faster than js because cpp is compiled language and js is interpreted language.

//js fast iss liye nhi ke har baar i ke liye memory allocate kar raha hai .. har i ke liye nyi memory allocate hogi aur har baar 
    // sum ke liye bhi allocate hogi




// /************************************ SCOPE ******************************************/

// Scope is the current context of code, which determines the accessibility of variables to JavaScript. In other words, scope determines the visibility of variables.
//Global scope , local scope(Functional scope) , block scope

//Global scope is the outermost scope in JavaScript. Variables declared in the global scope are accessible from anywhere in the code, including inside functions and blocks. 
let a = 10;
var b = 20;
const c = 30;



//Local scope (Functional scope) is the scope that is created when a function is invoked. Variables declared inside a function are only accessible within that function and its nested functions.
function greet(){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log("Hello Function");
    console.log(a,b,c);

    //ye sab bahar access nahi kar sakte kyuki ye local scope me hai. ye sirf function ke andar hi accessible hai.
}




//block scope is the scope that is created when a block of code is executed. Variables declared inside a block are only accessible within that block and its nested blocks.


if(true){
    let a = 10;
    var b = 20;
    const c = 30;  
}
console.log(a);  //ye accessible nahi hai kyuki let ka scope block ke andar hota hai.
console.log(b);  //ye accessible hai kyuki var ka scope function ke andar hota hai. 
console.log(c);  //ye accessible nahi hai kyuki const ka scope block ke andar hota hai.




var amount = 400;
if(true){
    let a = 10;
    var amount = 20;
    const c = 30;  
}
console.log(amount);  //20
// let aur const ka scope block ke andar hota hai. 
// var ka scope function ke andar hota hai.

//let allow nhi karta ki same variable name ko dobara declare kare ek he scope me . var allow karta hai.



let amount = 20;
const b= 30;
var c = 50;

if(true){
    let amount =30;         //ye alag scope hai kyuki ye block ke andar hai. isliye ye outer scope ke amount ko override nahi karega.
    console.log(amount);
}
console.log(amount);  //20




//its reason is hoisting. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing 
// scope during the compilation phase.

console.log(a);  //ye accessible nahi hai kyuki let ka scope block ke andar hota hai.
console.log(b);  //ye accessible nahi hai kyuki const ka scope block ke andar hota hai.
console.log(c);  //ye accessible hai kyuki var ka scope function ke andar hota hai.         //undefined 

let a = 20;   //isko kya pehle access kar skte     -- nhi 
const b = 30;  //isko kya pehle access kar skte     -- nhi
var c=10;      //isko kya pehle access kar skte     -- haan kyuki var ka scope function ke andar hota hai. isliye ye accessible hai.




greet();        //we can call function before declaration because of hoisting. Function declaration is hoisted to the top of the scope, so it can be called before it is defined.
function greet(){
    console.log("Hello Greet");
}


// greet();    //ye error dega kyuki function expression ko hoist nahi kiya ja sakta. function expression ko call karne se pehle define karna padta hai.     
let greet = function(){
    console.log("Hello Greet");
}
greet();  




//while loop
let i=6;
while(i<=10){
    console.log(i);
    i++;
}


//do while loop






const obj={
    name:"Rohit",
    age:30,
    amount:420,
}

const a=Object.values(obj);   //array ke form me a ke andar obj ke values aa gaye. 
// a kuch aise hoga [ 'Rohit', 30, 420 ]
console.log(a);

for(let i=0;i<a.length;i++){
    console.log(a[i]);
    console.log(obj[a[i]]);   //ye obj ke andar ke values ko print karega.
}



const obj={
    name:"Rohit",
    age:30,
    amount:420,
}
const a=Object.keys(obj); 
for(let i=0;i<a.length;i++){
    console.log(obj[a[i]]);   //ye obj ke andar ke values ko print karega.
}






// let num1 = 231;
// let num2 = new Number(231);
// let num3 = new Number(231);
// console.log(num1==num2);        //true, because num2 is converted to number before comparison.
// console.log(num2==num3);        //Dono alag-alag objects hain.
// // true and false
// console.log(num2);              //[Number: 231]
// console.log(typeof num2);       //object

let num = 231.68;
console.log(num.toFixed(3));            // 231.680
console.log(num.toPrecision(4));        // 231.7        //4 significant digits
console.log(num.toExponential(2));      // 2.32e+2
console.log(typeof num.toString());     // string       //Number ko string bana deta hai.
console.log(num.valueOf());             // 231.68

//  Math

console.log(Math.E)
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.LOG10E);

// floor and ceil
let num1 = 23.1;
console.log(Math.floor(num1));
console.log(Math.ceil(num1));

console.log(Math.floor(Math.random()*10));
// 0<=value<1
// 0-9

// 1-10 generate
// console.log(Math.floor(Math.random()*10)+1)

// 11-20 generate
// console.log(Math.floor(Math.random()*10)+11);
// 0-9 + 11

// min = 40 , max =50;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0-9
// console.log(Math.floor(Math.random()*10));

// 0-10
// 2-12
// console.log(Math.floor(Math.random()*11+2));
// 30-40
// console.log(Math.floor(Math.random()*(40-30+1)+30));

// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));

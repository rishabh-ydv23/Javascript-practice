// Primitive data types in JavaScript are immutable, meaning their values cannot be changed once they are created. Non-primitive data types, such as objects and arrays, are mutable, meaning their values can be changed after they are created.
// String
// Number
// Boolean
// Null
// Undefined
// BigInt
// Symbol


//Non primitive data types: Object, Array, Function
//Non primitive dt are mutable, meaning their values can be changed after they are created.

// | Feature  | Primitive               | Non-Primitive           |
// | -------- | ----------------------- | ----------------------- |
// | Stores   | Single value            | Multiple/complex values |
// | Memory   | Stack                   | Heap (reference)        |
// | Copy     | Value copied            | Reference copied        |
// | Mutable  | No (immutable)          | Yes (mutable)           |
// | Examples | Number, String, Boolean | Object, Array, Function |

// Immutable: Existing value ko modify nahi kar sakte, change karne par nayi value create hoti hai.
// Mutable: Existing value ko directly modify kar sakte ho.

let str = "hello";
str[0] = "H";
console.log(str);//hello


// Nayi String Create Hoti Hai
let str = "hello";
str = "Hello";
console.log(str);
// Yahan "hello" ko modify nahi kiya gaya.
// Ek nayi string "Hello" bani aur str usko point karne laga.


let bal = null;
console.log(typeof bal);



// Undefined
let account;
console.log(account);


let x = false;
console.log(Number(x));    //0

// let account = "100xs";
// let bal = "200s"
console.log(Number(account));    //NaN
console.log(Number(bal));
console.log(parseInt("100xs")); // 100

// // String ke andar convert
let ab = 20;
console.log(String(ab));

//null
let x1 = null;
console.log(Number(x1));        //0

// undefined
let x2;
console.log(Number(x2));        //Nan

let abc = " ";
console.log(Boolean(abc));
// JavaScript me:
// "" (empty string) → false
// " " (space wali string) → true
// "hello" → true




let num = 10;
let str = "20";
console.log(num==str);  //false

let a1 = 10;
let str1 = "10";
console.log(a1==str1);  //true, because == operator does type coercion, so str1 is converted to number before comparison.


null == undefined // true, because both represent absence of value, but they are different types.
null=== undefined // false 



// null can only be equivaklent to undefined ==
console.log(null==0);   // false, because null is only equal to undefined, not to any number.
console.log(null<0);    // false, because null is treated as 0 in numeric comparisons, but it is not less than 0.
console.log(null>0);    // false, because null is treated as 0 in numeric comparisons, but it is not greater than 0.
console.log(null<=0);   // true, because null is treated as 0 in numeric comparisons, and 0 is equal to 0.
console.log(null>=0);   // true, because null is treated as 0 in numeric comparisons, and 0 is equal to 0.



// undefined comparison
console.log(undefined==0);  //false, because undefined is not equal to any number.
console.log(undefined<0);      //false, because undefined is not comparable to numbers.
console.log(undefined>0);   //false, because undefined is not comparable to numbers.
console.log(undefined<=0);  //false, because undefined is not comparable to numbers.
console.log(undefined>=0);  //false, because undefined is not comparable to numbers.



console.log(NaN==NaN);

let str3 = "rohit"; 
console.log(Number(str3));



let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1==abc2==abc3);  //true, because abc1==abc2 is true (type coercion), and then true==abc3 is false, but in JavaScript, true is coerced to 1, so 1==123 is false. So the final result is false.

console.log(undefined!=null); //true, because undefined and null are different types, so they are not equal.'



//  bitwise operartor
console.log(4&5);       // 4 in binary is 100, 5 in binary is 101, so 100 & 101 = 100, which is 4 in decimal.    
console.log(11|14);     // 11 in binary is 1011, 14 in binary is 1110, so 1011 | 1110 = 1111, which is 15 in decimal.
console.log(5^7);      //XOR   1-1 =0   0-0=0 // 5 in binary is 101, 7 in binary is 111, so 101 ^ 111 = 010, which is 2 in decimal.


let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));
console.log(hero.lastIndexOf("Coder"));
console.log(hero.indexOf("coder"));
console.log(hero.includes("Coder"));


let newstring = "HeloDon";
console.log(newstring.slice(1,3));
console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
    // -6 = length(7) - 6 = 1
    // Matlab:newstring.slice(1,5)
console.log(newstring.slice(-2,4));
    // -2 = length(7) - 2 = 5
    // Matlab: newstring.slice(5,4)




let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));           //Hello Money Kaise ho Ji
console.log(str10.replaceAll("Ji","Money"));        //Hello Money Kaise ho Money


let str11 = "Money! honey! sunny! funny";
console.log(str11.split("! "));             //[ 'Money', 'honey', 'sunny', 'funny' ]


let str12 = " hello ji ";
console.log(str12.length);          // 10
console.log(str12.trim().length);   // 8


// New way to create string
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);


let num1 = 231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num1==num2);        //true, because num2 is converted to number before comparison.
console.log(num2==num3);        //Dono alag-alag objects hain.
// true and false
console.log(num2);              //[Number: 231]
console.log(typeof num2);       //object


let num = 231.68;
console.log(num.toFixed(3));            // 231.680
console.log(num.toPrecision(4));        // 231.7        //4 significant digits
console.log(num.toExponential(2));      // 2.32e+2
console.log(typeof num.toString());     // string       //Number ko string bana deta hai.
console.log(num.valueOf());             // 231.68


//Math
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
console.log(Math.floor(Math.random()*10)+1)


// 11-20 generate
console.log(Math.floor(Math.random()*10)+11);
// 0-9 + 11


console.log(Math.floor(Math.random()*(max-min+1)+min));

// Ludo
// 1-6
console.log(Math.floor(Math.random()*(6-1+1)+1));


const arr = [2,35,1,8,9,"rohit",true,8];
console.log(arr.length);
console.log(arr[1]);
console.log(arr.at(-2));
// -1 → last element      → 8
// -2 → second last       → true
// -3 → third last        → "rohit"


const arr = [2,35,1,8,9,"rohit",true,8];
const newarr = structuredClone(arr);
console.log(newarr == arr); // false, because structuredClone creates a deep copy of the array, so newarr and arr are two different objects in memory.
// Dono arrays ka content same hai, lekin dono alag memory locations par hain.
// == aur === arrays ke liye content compare nahi karte, balki reference (address) compare karte hain.


const a = [1,2,3];
const b = a;
console.log(a == b); // true, because both a and b point to the same array in memory.
// Yahan b ne a ka reference copy kiya hai:


arr.push(50);
arr.pop();


// unshift , add element at start
arr.unshift(10);

// // shift, delete element from start
arr.shift();


const arr = [2,35,1,8,9,"rohit",true,8,11,12,14,15,16,17,1,19,20];
console.log(arr.indexOf(8))
console.log(arr.lastIndexOf(8));    // 7 -> lekin index start se he start hoga ,because lastIndexOf searches from the end of the array and returns the index of the last occurrence of the specified element.
console.log(arr.includes(10));


const arr = [2,35,1,8,9,"rohit",true,8];
let a = arr.slice(2,5);
console.log(a);         // [1, 8, 9] → slice(start_index, end_index) → end_index is not included in the new array.
console.log(arr);


//splice
const arr = [2,35,1,8,9,"rohit",true,8];
console.log(arr);
// let newsplice = arr.splice(2,5);  // splice(starting_index,total_element_delete,add value) → starting_index is the index from where to start deleting elements, total_element_delete is the number of elements to delete, and add value is optional, if provided, it will be added at the starting_index after deletion.
let newsplice = arr.splice(2,5,0);  // splice(starting_index,total_element_delete,add value) → starting_index is the index from where to start deleting elements, total_element_delete is the number of elements to delete, and add value is optional, if provided, it will be added at the starting_index after deletion.
console.log(newsplice);         //output: [ 1, 8, 9, 'rohit', true ] → because we deleted 5 elements starting from index 2, which are [1, 8, 9, "rohit", true].
console.log(arr);               // output: [ 2, 35, true, 8 ] → because we deleted 5 elements starting from index 2, which are [1, 8, 9, "rohit", true], and the remaining elements are [2, 35, true, 8].


const arr = [2,35,1,8,9,"rohit",true,8];
arr.splice(2,0,"money",90);     // splice(starting_index,total_element_delete,add value) → starting_index is the index from where to start deleting elements, total_element_delete is the number of elements to delete, and add value is optional, if provided, it will be added at the starting_index after deletion.
console.log(arr);
console.log(arr.toString());    // output: 2,35,money,90,true,8 → because we added "money" and 90 at index 2, and the remaining elements are [2, 35, true, 8].
console.log(arr.join("*"));     // output: 2*35*money*90*true*8 → because we joined the elements of the array with "*" as the separator.



// concat
let arr1 = [2,35];
let arr2 = [5,12];
let arr4 = [23,432,1123,31];
let arr3 = arr1.concat(arr2,arr4);
console.log(arr3);
console.log(arr3[6]);
arr1.push(arr4);
console.log(arr1);
console.log(arr1[2][0]);


let arr = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]];
// flat ka use to convert into 1d array
let newarr = arr2d.flat(3);
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newarr);


let abc = [2,1,4,1];
console.log(Array.isArray(abc));

let ac = new Array(10);
console.log(ac.length);


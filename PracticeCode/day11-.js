//object is a collection of key value pair
//object is created by using {} or new Object() or class
//object is created in heap memory
//object is a mutable data type
//object is a reference data type
//object is a non-primitive data type
//object is a non-iterable data type
//object is a non-indexed data type

const obj = {
   0:20,
   1:50,
   2:70, 
   name:"rohit", 
   account_balance:420,
   gender: "Male",
   age: 30,
   "account number": 231230,
   undefined: 30,
   null:"mohan",
}

//null and undefined are also treated as string in object so we can access them by using [] operator.

//yha jo name property hai wo string me hai to usko access karne ke liye dot operator use kar sakte hai.
//in bc it is going to store as "name"

console.log(obj);

//ways to access the property of object
console.log(obj.name);
console.log(obj["name"]);

//in key we cant use space if want to give space then we have to use "" and access it by using [] operator
console.log(obj["account number"]);

console.log(obj['0']);
console.log(obj[1]);


//array ka implementation object jaise hota hai but array me index hote hai jo ki number hote hai and object me key hote hai jo ki string hote hai.



// *******************************************************



const person = new Object();        //object create karne ka dusra method
console.log(person);

// property add
person.name = "Rohit";
person.age = 80;
person.gender = "Male";
console.log(person);

// delete
delete person.age;
console.log(person);

// Modify or update
person.name = "Mohit";
console.log(person);






//******************************************** 
//third method to create object is by using class
//class is a blueprint of object
//class is a template of object
//class is a user defined data type
//class is a reference data type


class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
//constructor is used to initialize the object properties and it is called automatically when we create an object of class.


//here we are creating object of class People by using new keyword and passing the values to the constructor function.
let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 30, "Female")
let per3 = new People("Aman", 21, "Male")

console.log(per1, per2);






const obje={
    name:"Rishabh",
    age:21,
    college:"LPU",
    School:"USIS"
}

const arr=Object.keys(obje);   //it will return the keys of object in array form
console.log(arr);

const arr1=Object.values(obje);   //it will return the values of object in array form
console.log(arr);

const arr3=Object.entries(obje);   //2d array of key value pair jaisa return karega
console.log(arr3);




//Assign method is used to copy the properties of one object to another object. It will return the target object.
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};

const obj3=Object.assign(obj1,obj2);   //it will copy the properties of obj2 to obj1 and return obj1
console.log(obj3);      //{ a: 1, b: 2, c: 3, d: 4 }
console.log(obj1);      //{ a: 1, b: 2, c: 3, d: 4 }   //obj1 is modified
console.log(obj2);      //{ c: 3, d: 4 }   //obj2 is not modified

const obj4=Object.assign({},obj1,obj2);   //it will copy the properties of obj1 and obj2 to a new object and return the new object
                    //first parameter is target object and rest are source objects
console.log(obj4);
console.log(obj1);      //{ a: 1, b: 2, c: 3, d: 4 }   //obj1 is not modified



//same can be done by using spread operator
const obj5={...obj1,...obj2};   //it will copy the properties of obj1 and obj2 to a new object and return the new object
console.log(obj5);



let obj1 = {
    a:1, 
    b:2
}

let obj2 = obj1;
// shallow copy -> shallow copy me sirf reference copy hota hai, agar hum obj2 me koi property change karte hai to obj1 me bhi change ho jata hai.
obj2.a=10;
console.log(obj2, obj1);

//structureClone method hota hai jo ki deep copy karta hai, deep copy me reference copy nahi hota hai, agar hum obj3 me koi property change 
    // karte hai to obj1 me change nahi hota hai.
     
//deep copy -> deep copy me reference copy nahi hota hai, agar hum obj3 me koi property change karte hai to obj1 me change nahi hota hai.// //  deep copy 
let obj3 = structuredClone(obj1);
obj3.a = 20;
console.log(obj3, obj1);

 

//  Nested object
const user = {
    name:"Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
}
console.log(user.address.pincode);

const user2 = Object.assign({},user);
console.log(user2);
user2.address.pincode = 321314;         // address nested object hai isliye reference copy ho gaya hai, isliye user2 me address change karne par user me bhi change ho gaya.
console.log(user.address.pincode);

user2.name = "Mohit";
console.log(user.name);

//yha ye hua ke nested object me reference copy ho gaya hai, isliye user2 me address change karne par user me bhi change ho gaya. --shallow copy
// but name property me value copy ho gaya hai isliye user2 me name change karne par user me change nahi hua.   -- deep copy

//deep copy sirf non nested wale key value pair me hota hai, nested object me reference copy hota hai. isliye agar hume nested object me deep copy karna hai to hume structuredClone() method ka use karna padega.


//  Destructuring of an object yha hum object ke properties ko alag alag variable me assign kar sakte hai.
let obj = {
    name: "Rohit",
    money: 430,
    balance: 30,
    age: 20,
    aadhar: "hfdsiohsai"
};

const {name, balance, age} = obj;   //yha humne obj ke name, balance, age properties ko alag alag variable me assign kar diya.
console .log(name, balance, age);

const {name:full_name , balance: amount, age:Umar} = obj;
console.log(full_name, amount, Umar);   //yha humne obj ke name, balance, age properties ko alag alag variable me assign kar diya aur unka naam change kar diya.
//ab hum console.log(name) nahi kar sakte hai kyuki name variable ka naam change ho gaya hai full_name me, isliye hum console.log(full_name) karenge.

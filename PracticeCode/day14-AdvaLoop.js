//for in loop
// obj ka allocation stack me hota hai, aur obj ke andar ke properties heap me hoti hai
const obj={
    name:"Rohit",
    age:30,
    amount:420,
}

// for (let key in obj){
//     console.log(key);   //ye obj ke andar ke keys ko print karega.
// }

// for (let key in obj){
//     console.log(key, obj[key]);   //ye obj ke andar ke keys aur values ko print karega.
// }




let obj2 = Object.create(obj);                  //obj ke saari properties ko obj2 me inherit kar lega.
obj2.money = 420;
obj2.id = "Roh";
console.log(obj2);          //khud ke properties print hogi inherit waali nhi 
console.log(obj2.amount);   //ye obj ke andar ke amount ko print karega kyuki obj2 ne obj ko inherit kiya hai.

console.log(Object.keys(obj2));     //ye obj2 ke khud ke properties ko print karega, inherit waali properties ko nhi print karega.

for (let key in obj2){
    console.log(key);   //ye obj2 ke khud ke properties aur inherit waali properties dono ko print karega.
    console.log(obj2[key]);   //ye obj2 ke key aur value dono ko print karega, chahe wo inherit ho ya khud ke properties ho.
}



let obj={};

obj.name = "Rohit";
// key value writable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj,'name'));  //ye batayega ki name property ke liye kya kya attributes hai, jaise ki writable, enumerable, configurable.
                // {
                //   value: 'Rohit',
                //   writable: true,
                //   enumerable: true,
                //   configurable: true
                // }
                //jab key value ko define karte hai to by default ye 4 attributes true hote hai.

// writable = true          //to value ko change kar sakte hai, false to change nahi kar sakte.
//configurable = true      //to property ko edit kar sakte hai, false to edit nahi kar sakte.  like writable ko false karne ke baad bhi configurable ko true kar sakte hai, lekin writable ko true karne ke baad configurable ko false nahi kar sakte.
// configurable = false     //to na he writable ko change kar sakte hai na hi enumerable property ko delete kar sakte hai.



let obj={};
Object.defineProperty(obj, 'name', {
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:true,
})

obj.name = "mohit";   //writable true hone ki wajah se value change ho gayi. agar writable false hota to value change nahi hoti.
console.log(obj);

//agar jo mera pehel define property ke time configurable false hai to isse liye hum writable ko false nhi kar skte
Object.defineProperty(obj, "name",{
    writable:false,
})
obj.name = "mohit";




const obj1 = {
    name:"rohit",
    age:23,
    account_number:30001
};
obj1.account_number = 20001;   //writable true hone ki wajah se koi bhi change kar skta hai 

Object.defineProperty(obj1,'account_number',{
    writable:false,   //writable false hone ki wajah se koi bhi change nahi kar skta hai.
})





//enumerable = true hone ki wajah se for in loop me ye property print hogi, agar enumerable false hota to ye property print nahi hoti.
const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

for (let key in customer){
    console.log(key);   //ye customer ke andar ke keys ko print karega.
}

Object.defineProperty(customer,'name',{
    enumerable:false,   //enumerable false hone ki wajah se for in loop me ye property print nahi hogi. aur jo inherit ho rahi hai wo bhi print nahi hogi.
})

// for (let key in customer){
//     console.log(key);   //ye customer ke andar ke keys ko print karega.
// }



let customer2 = Object.create(customer);                  //customer ke saari properties ko customer2 me inherit kar lega. 
customer2.city = "Haridwar";
customer2.state = "Uttarakhand";

//iss waale case me customer2 ke andar ke khud ke properties aur inherit waali properties dono print honge.lekin name nhi hogi enumerable false

for (let key in customer2){
    console.log(key);   //ye customer2 ke khud ke properties aur inherit waali properties dono ko print karega
}




// customer -> inherit -> Object.Prototype -> null
// leking Object.Prototype ke properties iss liye nhi print honge kyuki Object.Prototype ke properties enumerable false hai
 



const arr=[1,2,3,4,5];
for (let key in arr){
    console.log(key);   //ye arr ke andar ke keys aur values ko print karega.
    // console.log(arr[key]);   //ye arr ke andar ke keys aur values ko print karega.
}
arr.name = "Rohit";
for (let key in arr){
    console.log(key);   //ye arr ke andar ke keys aur values ko print karega.
    // console.log(arr[key]);   //ye arr ke andar ke keys aur values ko print karega.
}

//isse liye array me hum for in loop ka use nhi karte 
// ye yha name property ko print karega kyuki arr ke andar ke properties enumerable true hai. lekin Object.Prototype ke properties enumerable false hai isliye wo print nahi hoga.

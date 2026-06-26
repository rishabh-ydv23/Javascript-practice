// 1000 milisecond = 1 second
const d=new Date();

// const d=new Date(10000);      // 1 january 1970 00:00:10 ,because 10000 milisecond = 10 second

console.log(d);         // 2026-06-22T17:02:29.873Z

console.log(d.toString());  // Mon Jun 22 2026 22:32:29 GMT+0530 (India Standard Time)

console.log(d.toDateString()); // Mon Jun 22 2026
 
console.log(d.toLocaleString()); // 6/22/2026, 10:02:29 PM

console.log(d.toISOString()); // 2026-06-22T17:02:29.873Z

console.log(typeof d); // object 


console.log(d.getDate());       // 22
console.log(d.getDay());        // 1
// Sun, Mon, Tue, Wed, Thu ,fri, Sat
// 0, 1,2 ,3,4,5,6
console.log(d.getMonth());      // 5
// Jan/feb/Mar
// 0/1/2/3


console.log(d.getFullYear());   // 2026
console.log(d.getMilliseconds());       // 873
console.log(d.getMinutes());        // 2
console.log(d.getTime());           // 1761265349873
const now = Date.now();         // 1687441349873
console.log(now); //             1687441349873



// Number: 0 based start honge
// String: 1 based start honge

const d = new Date("2022-10-20");
// year / Month / Date / Hour / Minute / second / millisecond
const date = new Date(2024,5,28, 10, 12,45, 231);
console.log(date.toString());

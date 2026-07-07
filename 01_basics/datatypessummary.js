//  Primitive :- pass by value wale data types ko primitives data types bolte h //
// 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

//console.log(typeof id);

const anotherId = Symbol('123')

// console.log(id);
 //console.log(typeof anotherId);

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)--> pass by reference

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]; --> type of object 
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){ --> type of function 
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// note :- stack (primitive),  heap(non - premitive)

let myYoutubename = "harsh";

let anothername = myYoutubename
anothername = "chaicode";

// console.log(myYoutubename);
// console.log(anothername);

// ise case me kya hua ki anothername ki ek new copy banti h jisme myyoutubename ki value another name ko assign ho jati h and fir jb anothername me jb firse se chaicode update hua to bs anothername hi hoga because anothername and myyoutubename dono alag alag variable ki copy bani h stack me to bs changes anothername me dikhega na ki myyoutubename me // 

let userOne = {
    email: "harsh@123.com",
    pass: "12345"
}

let userTwo = userOne;

userTwo.email = "chaicode@gmail.com";

console.log(userOne);
console.log(userTwo);

// is wale case me kya hua ki userOne and userTwo dono same object ka reference mil gya to dono same object ko point krne lge to userOne ya userTwo me se koi v change krega email to wo change usertwo or one ko v dekhega or heap me v jo object store hua h usme v change dikhega //





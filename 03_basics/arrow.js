const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`); --> hum apne current object me username key ko access krne ke liye this ka use krte h 
        // console.log(this);--> is this ko print krenge to ye this ye poora user print krke dega iska mtlb ye h ki ye this jis v object ke andr print hoga to wo poora context hi print krega. context ka mtlb h user object.  
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); --> ye this vs code me to {} empty object print krega but console me jaa kr dekhna ye poori global object print krega jisme bhut sare methods honge and browser me is global object ka name window object hota h //

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); --> ye function me this.username ko print krwaoge to undefined dega//
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);--> ye function me this.username ko print krwaoge to undefined dega//
// }

const chai =  () => { //--> arrow function //
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// note:- agr curly braces use kr rhe h arrow function me to return likhna mandatory h //

// const addTwo = (num1, num2) =>  num1 + num2 --> implecit return ek line me hum aise v likh skte h 

// const addTwo = (num1, num2) => ( num1 + num2 ) --> agr parenthesis use kr rhe ho to return likhne ki jarurat nhi //

const addTwo = (num1, num2) => ({username: "hitesh"}) // yha pr object return ho rha h agr object ko return krna h to parenthensis me dalna hoga  //


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// global scope ke pollution se problem hoti h kai bar to us globalscrope ke variables ke polution ko htane ke iefi ka use krte h . and ye fast execute krti h funciton ko // 
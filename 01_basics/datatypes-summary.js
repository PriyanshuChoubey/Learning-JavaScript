//js is a dynamic language

//Primitive (call by value)

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTem = null
let userEmail;      //undefined

const id = Symbol('123')    //Symbol use to give unique values
const anotherId = Symbol('123')
console.log(id === anotherId)       //false


//Reference (Non primitive)

//Array, Objects, Functions

//Array example
const heros = ["shaktiman", "naagraj", "doga"]
//Object example: they are always inside the middle bracket and they can have any datatypes inside
let myObj = {
    name: "Choubey",
    age: 19,
}
//Function example
const myFun = function(){
    console.log("hey bro");
}

console.log(typeof myObj );     //Object




// Stack(primitive, uses copy)   Heap(non-primitive, uses original obj)
let num = undefined

let stringNum = String(num)

console.log(typeof stringNum);
console.log(stringNum);

/************************************************* */
let userLogedIn = undefined

let booleanResult = Boolean(userLogedIn)

console.log(typeof booleanResult);
console.log(booleanResult);

/*
    1 --> true
    0 --> false
    "" --> false
    "something" -->true
    null --> false
    undefined --> false
*/

/****************************************************** */
let stringEx = false

let inNumber = Number(stringEx)

console.log(typeof inNumber);
console.log(inNumber);

/*
    "33"  --> 33
    ""    --> 0
    "33abc" --> NaN  (Not a Number)
    "abc"  --> NaN
    null -->0
    undefined --> NaN
    true  --> 1
    false --> 0
*/
let x =1
let y= x++
console.log(x,y);
let x2 =1
let y2=++x2
console.log(x2,y2);

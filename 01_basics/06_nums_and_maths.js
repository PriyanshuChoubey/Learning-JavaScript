const num = 200
console.log(num);

const newNum = new Number(300)
console.log(newNum);
console.log(newNum.toString());
console.log(typeof newNum);
console.log(typeof newNum.toString());
console.log( newNum.toString().length);
console.log(newNum.toFixed(2)); //fix the number of values after decimal


const newNum2 = 27248097
console.log(newNum2.toLocaleString('en-IN'));       //uses indian system of representaion of numbers(en-IN) else by default american system


//++++++++++++++++++ Maths ++++++++++++++++++++++++++++

console.log(Math.abs(-34));     //convert into +ve
console.log(Math.round(4.6));   //round off the value to eliminate decimal values
console.log(Math.ceil(4.2));        //give 5, if 4 get increase by .1 also
console.log(Math.floor(4.9));       //give 4 until it became 5
console.log(Math.max(4,5,6,7));     //give maximum value
console.log(Math.min(4,5,6,7));     //give minimum value


console.log(Math.random());        //it always give value between 0 and 1
console.log(Math.random()*10);      //after multiplying it with 10 we get 1 value before decimal
console.log(Math.floor(Math.random()*10 +1)); //Math.floor() --> eliminate decimal & give minimal value & + 1 give value >0

const min = 10
const max = 20

console.log(`Random values between ${min} and ${max} is: `);
console.log(Math.floor((Math.random()*(max-min))+min));


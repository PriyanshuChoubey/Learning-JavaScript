const name = "Priyanshu"
const repoCount = 6

console.log("My name is " + name + " and my repoCount is "+repoCount);  //Outdated way of concatination

console.log(`My name is ${name} and my repoCount is ${repoCount}`);     //efficient way

//Another way of declaring String

const newName = new String("pC")    //creating new string as an object of class String

console.log(`${newName[0]} means PRIYANSHU and ${newName[1]} means CHOUBEY`);   /* using String object we have access to many 
                                    methods and we can access character of strings using its keys corresponding to their values */

console.log(newName.length);


const ns = "   hey   "
console.log(ns);
console.log(ns.trim());     //.trim() will delete the extra spaces in the string  

const ns1 = "https://priyanshuChoubey.com/choubey%20priyanshu"
console.log(ns1.replace('%20','-'));

console.log(ns1.includes("choubey"));       //searching for "choubey" in string ns1

const ns2 = "hey there I am learning JS"
console.log(ns2.split(' '));
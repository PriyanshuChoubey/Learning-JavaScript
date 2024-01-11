const userId = 12345

let userName = "Priyanshu Choubey" 

var userAdd = "India"

random = "hii there"  //this is also a way of declaring variable but is not a good way

/*
    No we generally prefer using let over var keyword for creating variables
    because var has issue with Block scope and Functional scope
*/

//userId = 786433   ----> not allowed, it is a constant

userName = "Ram"
userAdd = "Bharat"

let say;   //here the variable has initialized but not declared 

console.table([userName,userAdd,random,say])


//Always use let keyword to declare variables because it follow bloack scope and functional scope
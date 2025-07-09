// Functions -> reusable blocks of code
// a complex data type

// 3 Ways
//  -> Function Declaration using the function keywork
// -> Function Expression -> const
//                        -> arrow (ES6)


// Function declaration using the function keyword
function greet() {
  console.log("Hello World");
}
greet();

//using const
// SYNTAX
// const "name_of_the_func" = function(){
// resuable code
// }

const greetFunc = function () {
  console.log("Const Function expression called");
}
greetFunc();
const coFun=function(){
    for(let i=0;i<5;i++){
        console.log("Const Function expression called",i);
    }
}
coFun();
// Arrow Function => ES6
// SYNTAX
// const "name_of_the_func" = () => {
// reusable code
// }
const greetArrow = () => {
  console.log("Arrow function called");
}
greetArrow();

//DIFFRENCE BETWEEN ARROW AND REGULAR FUNCTION
const obj = {
  name: "Mayur",
  regularFunc: function () {
    console.log("Regular:", this.name); // 👉 "Mayur"
  },
  arrowFunc: () => {
    name = "MayurArrow"; // This will not affect the outer scope
    console.log("Arrow:", this.name); // 👉 depends on outer scope, probably undefined
  },
};

obj.regularFunc(); // "Regular: Mayur"
obj.arrowFunc();   // "Arrow: undefined"

//WRITE A FUNCTIN TO FIND AVERAGE OF THREE NUMBERS

const avgThreeNumber = (num1, num2, num3) => {
    const avg=(num1+num2+num3)/3;
    console.log("Average of three numbers is", avg);
}

avgThreeNumber(3, 4, 5);
// Create a function called greetUser that takes
// name as input and prints "Hello name"
const greetUser = (name) => {
    console.log("Hello", name);
}
greetUser("Mayur");

// Create a function that takes a number as
// an argument and return whether it is even
// or odd
  const evenodd = function (num1) {
    if (num1 % 2 == 0) {
        console.log("number is even");
    } else {
        console.log("number is odd");
    }
  }
evenodd(5); 
//********************************************************************
// **************************************************************************************** */

// Functions -> reusable blocks of code
// a complex data type

// 3 Ways
//  -> Function Declaration using the function keywork
// -> Function Expression -> const
//                        -> arrow (ES6)

// Function declaration
// SYNTAX
// function 'name_of_the_function'(){
//  resuable code
// }

function greet() {
  console.log("Hello World");
}

// Function call
greet();

// Function Expression
// SYNTAX
// const "name_of_the_func" = function(){
// resuable code
// }

const greetFunc = function () {
  console.log("Function expression called");
};

greetFunc();

// Arrow Function => ES6
// SYNTAX
// const "name_of_the_func" = () => {
// reusable code
// }

const greetArrow = () => {
  console.log("Arrow function");
};
greetArrow();

// Functiom definition -> inputs -> arguments
const avgThreeNumber = (num1, num2, num3) => {
  const avgNum = (num1 + num2 + num3) / 3;
  return avgNum;
};

// Function call -> Parameters
const output = avgThreeNumber(3, 4, 5);
console.log(output);

// Create a function called greetUser that takes
// name as input and prints "Hello name"
const greetUser = (name) => console.log("Hello", name);
const greetUser2 = (name) => {
  console.log("Hello", name);
};
greetUser("Tripat");

// Create a function that takes a number as
// an argument and return whether it is even
// or odd

const evenodd = (num1) => {
  if (num1 % 2 == 0) {
    console.log("number is even");
  } else {
    console.log("number is odd");
  }
};

evenodd(5);

const isEvenOrOdd = (num) => (num % 2 === 0 ? "even" : "odd");

console.log(isEvenOrOdd(5));

// Create a function that takes username and password as arguments
// if username = "test" password="test123" -> Login successful
//  username incorrect -> Username is incorrect
//  password incorrect -> password is incorrect
// both incorrect -> both are incorrect


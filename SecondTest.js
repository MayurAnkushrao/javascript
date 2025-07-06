//==========================================================================================================================================

console.log("External script");

/* Variables in JavaScript */
let a = 10; // Assignment
console.log("The value of a is", a); // Retrieval

a = 50.123; // Re-assignment
console.log("The value of a is", a);

a = "Tripat"; // example of dynamically typed language
console.log("The value of a is", a);

const age = 18;
console.log("Age is", age);

// age = 25;
// ERROR - Assignment to a const variable

a = "25";
console.log("The value of a is", a);

var bool1 = true; // 1 -> true
var bool2 = false; // 0 -> false

console.log("Value of bool1", bool1);
console.log("Value of bool2", bool2);

var b;
console.log("The value of b is", b);
// JavaScript has set it to undefined. Missing value

var c = null;
console.log("The value of c is", c);
// Developer assigns it. Inentionally absent

/* --------------NUMERIC OPERATORS------------*/
// POST -> use and then increment
let x = 5;
console.log(x++);
console.log(x);

// PRE -> increment and then use
let y = 10;
console.log(++y);
console.log(y);

let z = 3;

console.log(z++); // 3
// z-> 4
console.log(++z); // 5

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(y / x);
console.log(y % x); // Modulo operator -> remainder

// BODMAS -> Bracket Of Division Multiplication Addition and Subtraction
console.log(10 + 2 * 12);
console.log((10 / 2) * 12);
console.log((10 + 2) * 12); // correct way to write it

/* --------------BOOLEAN OPERATORS------------*/
/*NOT OPERATOR*/
let bool_1 = true;
console.log(!bool_1);

let bool_2 = false;
console.log(!bool_2);

console.log(!!bool_1);

let num1 = 0; // 0 is considered as false
console.log(!num1);

let num2 = 20;
console.log(!num2); // everything else is considered as true

let undefinedVal; // undefined is also considered as false
console.log(!undefinedVal);

let nullVal = null;
console.log(!nullVal); // null is also considered as false

let emptyString = "";
console.log(!emptyString);

// FALSY VALUES -> false, undefined, null, 0, ''

// LOGICAL OR -> ||
// if any value is true output is true
// T F -> T
// F T -> T
// T T -> T
// F F -> F

console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log(true || true);

// LOGICAL AND -> &&
// only when both values are true output will be true
// T F -> F
// F T -> F
// T T -> T
// F F -> F

console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log(true && true);

// PRECEDENCE -> NOT > AND > OR

let result = true || (false && false);
console.log(result); // true

let output = !(true && (false || false));
console.log(output); // true

let op1 = null; // FALSY value
let op2 = undefined; // Falsy value
let op3 = "default"; // Truthy value
console.log(op1 || op3 || op2); // return the first truthy value

let op4 = ""; // falsy
console.log(op4 || op2 || op1); // return last falsy value

console.log(op1 && op2 && op3); // returns the first falsy value
console.log(op3 && op2 && op1); // returns the first falsy value

/* TERNARY OPERATOR */
// condition that evaluates to boolean ? something : something else;
const newAge = 34;
const isAllowed =
  newAge >= 18 ? "Allowed to drive" : "Wait for a few more years";
console.log(isAllowed);
let message;

// CONTROL FLOW STATEMENT -> IF ELSE
// () -> parentheses
// {} -> braces
// [] -> brackets
if (newAge >= 18) {
  message = "Allowed to drive";
} else {
  message = "Wait for a few more years";
}

console.log(message);

// DRY Principle -> Do Not Repeat Yourself
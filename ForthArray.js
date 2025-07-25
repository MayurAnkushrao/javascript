/*----ARRAYS--------------*/
// collection of any type of values
// Two ways to create an array
// 1. [] --> most commonly used
// 2. new Array method --> XXX

const fruits = ["apple", "banana", "cherry"];
//indexing starts at 0

// fruits[0] , fruits[1], fruits[2]
console.log(fruits[0], fruits[1], fruits[2]);

console.log(fruits);

console.log(fruits[4]); // undefined

// Arrays are a collection of different data types
const arr = [1, 2, 3, "Tripat", true, ["dog", "cat"]];
console.log(arr);

// RETRIEVING ELEMENTS OF ARRAY
let marks = [45, 65, 78, 89, 91, 23];

// 1. PROPERTY -> length
// return how many elements do you have in your
// array

console.log(marks.length);

for (let i = 0; i < marks.length; ++i) {
  console.log(marks[i]);
}

// INSERTION OF ELEMENTS IN AN ARRAY

// 1. PUSH METHOD -> inserts elements at the end
// of array and returns the new length of array
// const newArr = marks.push(45)
// newArr will be equal to 7, the length of the
// updated array
marks.push(45);
console.log(marks);
console.log("After pushing", marks.length);

// 2. UNSHIFT METHOD -> inserts elements at the
// beginning of the array and returns the new length

marks.unshift(100);
console.log(marks);
console.log("After unshifting 100", marks.length);

// REMOVAL OF ELEMENTS IN AN ARRAY
// 1. POP METHOD -> removes the last element
// and returns that element

const elementRemoved = marks.pop();
console.log(marks);
console.log("Element removed", elementRemoved);

// 2. SHIFT METHOD -> removes the first element
// and returns that element

const eleRemoved = marks.shift();
console.log("After shifting first ele"+eleRemoved);
console.log(marks);

// Create a shopping list of 5 items;
// Add new element to the list;
// Remove the first and last item and print them
const shoppingList = ["bread", "eggs", "shampoo", "toothbrush", "fruits"];
shoppingList.push("pen");
console.log(shoppingList);
console.log("Shift removes first element");

const firstElement = shoppingList.shift();
console.log(firstElement);
console.log(shoppingList);
const lastElement = shoppingList.pop();
console.log("Pop removes last element");
console.log(lastElement);
console.log(shoppingList);
console.log(firstElement, lastElement, shoppingList);

// INSERTION AND REMOVAL AND REPLACE FROM ANY PLACE
// splice -> splice(startingIndex, no Of Item To be deleted, item1,item2, item3,...)
// shopping list - ['eggs', 'shampoo', 'toothbrush', 'fruits']
// to remove shampoo
console.log("*************************************************");
console.log("Splice method");
shoppingList.splice(1, 1, "conditioner");
console.log(shoppingList);
// eggs, conditioner, toothbrush, fruits
console.log("Splice method to add paste at index 1");
shoppingList.splice(1,0, "paste");
//["eggs","paste","conditioner","toothbrush","fruits"]
//["eggs","conditioner","toothbrush","fruits"]
console.log(shoppingList);
// eggs, paste, conditioner, toothbrush, fruits

let fruits2 = ["apple", "banana", "cherry"];
fruits2.splice(2, 1);
console.log(fruits2); // ["apple", "banana"]

let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow");
console.log(colors); //red, yellow, green, blue

let items=["pen","pencil","eraser","sharpner","sissors"];
console.log(items.slice(-5,-3));
console.log(items); // ["eraser", "sharpner", "sissors"]
let spliced=items.slice(-5,-3);
console.log(spliced); // ["eraser", "sharpner", "sissors"]

items.slice(1,3);
console.log(items.slice(1,3)); // ["pencil", "eraser"]

//reverse
items=["10","12","35","24","15"];
items.forEach((item) => {
  console.log(item);
});
//reverse
let reversedItems = [];
for(let i = items.length - 1; i >= 0; i--) {
  console.log(items[i]);
  reversedItems.push(items[i]);
}
console.log(reversedItems); // ["sissors", "sharpner", "eraser", "pencil", "pen"]

items.reverse();
console.log(items); // ["5", "4", "3", "2", "1
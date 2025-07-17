//HIGHER ORDER FUNCTIONS -> forEach, maop, filter, reduce, sort
//a function that takes another function as an argument or returns a function as a result is called a higher order function
//forEach -> executes a provided function once for each array element
//map -> creates a new array with the results of calling a provided function on every element in the calling array
//filter -> creates a new array with all elements that pass the test implemented by the provided function
//reduce -> executes a reducer function (that you provide) on each element of the array, resulting in a single output value

let items=["10","-20","15","2","12"];
for(let i=0;i<items.length;i++){
    console.log(items[i]);
}
//foreach method
items.forEach(/*callback Function*/
    function(item) {
     console.log(item);
}
);
//callback function -> a function that is passed as an argument to another function and is executed inside that function
items.forEach((item, index) => {
    console.log(`Item at index ${index} is ${item}`);
});

const numbers = [1, 2, 3, 4, 5];
//print square of each numbers
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]*numbers[i]);
}
//Using forEach to print square of each number
console.log("using for each");
numbers.forEach((number) => {
    console.log(number * number);
});

const words = ["apple", "banana", "cherry"];
//apple! banana! cherry!
words.forEach((word) => {
    console.log(word + "!");
});

numbers.forEach((number, index) => {
    while(number%2 === 0) {
        console.log(`Even number at index ${index} is ${number}`);
        break; // to avoid infinite loop
    }
});
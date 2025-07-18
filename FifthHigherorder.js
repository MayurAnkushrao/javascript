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

//map method
//=============
console.log("Using map to get square of each number");
const squares = numbers.map((number) => {
    //MANDATORY: return a value
    return number * number;
});

console.log(squares); // [1, 4, 9, 16, 25]

const salary= [1000, 2000, 3000, 4000, 5000];
//Adding 10% to each salary
let updatedSAl=[];
salary.forEach((sal,index)=>{
    sal=sal+sal*10/100;
    console.log(sal);
    updatedSAl.push(sal);
    
});
console.log(updatedSAl);

//using map methord

const updatedSal=salary.map((sal)=>{
    return sal+sal*0.1;
});

//filter method
//=============
//filter method creates a new array with all
//  elements that pass the test implemented by
//  the provided function
let numbers4=[1,2,3,45,6,5,6];
let evennum=numbers4.filter((num)=>{
    return num%2==0;//***true/false***
});
console.log(evennum); // [2, 6, 6]

//filter number greater than 5
let greater5=numbers4.filter((num)=>{
    return num>15;
})
console.log(greater5); // [45]
// REDUCE METHOD
//======================
//let numbers4=[1,2,3,45,6,5,6];
//sum of all numbers
let numbers5=[40,55,70,30,90];
console.log(numbers5);
let sum=0;
numbers5.forEach((num)=>{
    return sum+=num;
});
console.log(sum); // 285

//Using reduce method
//Reduce is used to reduce the array to a single value

//array.reduce((accumulator, currentValue) => {

//    // logic to combine accumulator and currentValue
//    return accumulator;
//}, initialValue);
let sum2=numbers5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 10); // initial value is 10  default is 1
console.log(sum2);
//product of all numbers
let prod=numbers5.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
},1); // initial value is 1
console.log(prod); 

const setwords =['i'+'love'+'js'];
//Using reduce to concatenate words
const concnzte=setwords.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;

},""); // initial value is empty string
console.log(concnzte); // "i love js"
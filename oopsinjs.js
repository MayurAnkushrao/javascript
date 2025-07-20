// JavaScript Objects
// An object in JavaScript is a collection of key-value pairs.
// Keys (also called properties) are strings, and values can be of any data type.

// Create a 'person' object representing a person with various properties
let person = {
    name: "Mayur",                  // String property
    age: 25,                        // Number property
    isStudent: true,               // Boolean property
    address: {                     // Nested object representing address
        city: "Pune",              // Inner key 'city'
        state: "Maharashtra"       // Inner key 'state'
    },
    technologies: ["JavaScript", "Python", "Java"] // Array property
};

// Accessing object properties

console.log(person.name); 
// Accessing and printing the 'name' property using dot notation
// Output: Mayur

console.log(person); 
// Prints the entire 'person' object as a whole

console.log(person.address.city); 
// Accessing a nested property inside 'address' object
// Output: Pune

console.log(person.technologies[0]); 
// Accessing the first element from the 'technologies' array
// Output: JavaScript

console.log(person.email); 
// Tries to access 'email' property (not defined yet), so it returns undefined
// Output: undefined

// Now we use a variable to dynamically access object properties using bracket notation

keyname = "address"; 
// Defining a variable named 'keyname' with value 'address'

console.log(person[keyname]); 
// Accessing the property 'address' via variable (bracket notation): person["address"]
// Output: { city: "Pune", state: "Maharashtra" }

person.email = "mayurankushrao2004@gmail.com"; 
// Adding a new property 'email' to the 'person' object dynamically
// Now 'person' object also contains: email: "mayurankushrao2004@gmail.com"


person["name"] = "Vishal";//person.name="vishal"
person['gender']="Male";//person.grnder="Male"
console.log(person)
//checks that the property exists or not if property then override it else create 
// new property and initilize it accordingly

delete person.gender;
console.log(person);

const arr=[
    {
        name:"Mayur", 
        age:25, 
        isStudent:true
    },
    {
        name:"Vishal", 
        age:26, 
        isStudent:false
    },
    {
        name:"Sagar", 
        age:27, 
        isStudent:true
    }
]

//print age of c
console.log(arr.find((item) => item.name === "Sagar").age);
console.log(arr[2].age); // Accessing age of the third object directly

// Using forEach to iterate over the array of objects and print each person's name
arr.forEach((item) => {
    console.log(item.name);
});

arr[2].city = "Pune"; // Adding a new property 'city' to the third object
console.log(arr[2].city); // Output: Pune

// Using map to create a new array with names of all persons
const namesArray = arr.map((item) => item.name);
console.log(namesArray); // Output: ["Mayur", "Vishal", "Sagar"]

let books=[
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford"
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke"
    }
]
//o/p= title: "Eloquent JavaScript", title: "JavaScript: The Good Parts",

books.forEach((book) => {
    console.log(`title: "${book.title}"`);
    });
console.log("Using forEach to print book titles:");
// Using forEach to iterate over the books array and print each book's title
let booktitles=books.map ((book)=>{
   
    return book.title;
});
// Using map to create a new array with book titles

console.log(booktitles);

//add new car
let cars=[
    {brand:"honda",model:"city"},
    {
        brand:"BMW",model:"30"
    }
];
console.log("cars");
console.log(cars);
cars.push({
    brand:"TATA",model:"Punch"
});
console.log(cars);


let students=[
    {
        name:"Aman",age:17
    },
    {
        name:"Kabir",age:21
    }
];
console.log(students);
console.log("*********************************");
let adult=students.filter((student)=>{
    return student.age>=18;
});
console.log(adult);

console.log("DAY_:_2_DAY_:_2_DAY_:_2_DAY_:_2_DAY_:_2_DAY_:_2_DAY_:_2_DAY_:_2_");

console.log(Object.keys(person));
console.log(Object.values(person));
let values=Object.values(person);

console.log(values[4][0]);


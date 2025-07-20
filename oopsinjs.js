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

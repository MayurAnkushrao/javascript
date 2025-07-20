// Question 01
// Given an array of objects,
// calculate the average test score of each student and return an array
const students2 = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

//  []
let total=0;
let markavg=students2.map((student)=>{
    const sum = student.scores.reduce((acc, score) => acc + score, 0);
    console.log(sum);
    avg = sum/student.scores.length;
    console.log("avg "+avg);
    return avg;
});
console.log(markavg);

// You just returned home to find your mansion has been robbed!
// Given an object of the stolen items, return the total amount of the
// burglary (number). If nothing was robbed, return the string "Lucky you!".

// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"
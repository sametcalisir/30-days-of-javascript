// Exercise Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

const regex = /\d+/g;

const value = text.match(regex);

const salary = parseInt(value[0]);
const annual = parseInt(value[1]);
const onlineCourses = parseInt(value[2]);

const annualSalary = salary * 12;
const annualCourses = onlineCourses * 12;
const total = annualSalary + annualCourses + annual;

console.log("Total annual income:", total, "€");

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];

const sorted = points.sort((a, b) => a - b);
const maxPoint = Math.max(...points);
const minPoint = Math.min(...points);
const distance = maxPoint - minPoint;

console.log("Sorted points:", sorted);
console.log("Distance:", distance);

// 3. Write a pattern which identify if a string is a valid JavaScript variable
const isValidVariable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

function checkValidVariable(variableName) {
  return isValidVariable.test(variableName);
}

console.log(checkValidVariable("first_name")); // true
console.log(checkValidVariable("first-name")); // false
console.log(checkValidVariable("1first-name")); // false
console.log(checkValidVariable("firstname")); // true

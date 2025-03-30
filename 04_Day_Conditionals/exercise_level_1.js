// Exercise Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 25;
let yourAge = prompt("Enter your age:");
if (myAge > yourAge) {
  console.log("I am older than you.");
} else if (myAge < yourAge) {
  let yearsOlder = yourAge - myAge;
  console.log(`You are ${yearsOlder} years older than me.`);
} else {
  console.log("We are the same age.");
}

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// i. using if else
let a = 4;
let b = 3;

if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

// ii. ternary operator
let x = 4;
let y = 3;
let result = x > y ? "4 is greater than 3" : "3 is greater than 4";
console.log(result);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or odd using JavaScript?
var numberPrompt = prompt("Enter a number:");
var number = numberPrompt;

if (number % 2 == 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number.`);
}

// Exercise Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
var firstName = "Mustafa Samet";
var lastName = "Çalışır";
var country = "Turkey";
var city = "Sivas";
var age = 26;
var isMarried = false;
let year = 2025;

console.log("firstName: " + typeof firstName); // string
console.log("lastName: " + typeof lastName); // string
console.log("country: " + typeof country); // string
console.log("city: " + typeof city); // string
console.log("age: " + typeof age); // number
console.log("isMarried: " + typeof isMarried); // boolean
console.log("year: " + typeof year); // number

// 2. Check if type of '10' is equal to 10
console.log(typeof "10" == 10); // false

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10); // false

// 4. Boolean value is either true or false.

// i. Write three JavaScript statement which provide truthy value.
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 5); // true

// ii. Write three JavaScript statement which provide falsy value.
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 5); // false

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

// Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length); // 6
console.log("jargon".length); // 6

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true

// Checking the "There is no 'on' in both dragon and python" condition
console.log("There is no 'on' in both dragon and python" ? false : true); // false

// 7. Use the Date object to do the following activities

// i. What is the year today?
var today = new Date();
console.log(today.getFullYear()); // 2025

// ii. What is the month today as a number?
console.log(today.getMonth() + 1); // 3 (March)

// iii. What is the date today?
console.log(today.getDate()); // 29

// iv. What is the day today as a number?
console.log(today.getDay()); // 6 (Saturday)

// v. What is the hours now?
console.log(today.getHours()); // 18

// vi. What is the minutes now?
console.log(today.getMinutes()); // 30

// vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
var secondsElapsed = Math.floor(today.getTime() / 1000);
console.log(secondsElapsed); // 1700000000 (example value, will vary based on current date and time)

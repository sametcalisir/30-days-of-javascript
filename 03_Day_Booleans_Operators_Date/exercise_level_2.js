// Exercise Level 2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
var base = prompt("Enter the base of the triangle:");
var height = prompt("Enter the height of the triangle:");
var tarea = 0.5 * base * height;
console.log("The area of the triangle is " + tarea);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
var sideA = prompt("Enter side A of the triangle:");
var sideB = prompt("Enter side B of the triangle:");
var sideC = prompt("Enter side C of the triangle:");
var perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log("The perimeter of the triangle is " + perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseFloat(prompt("Length: "));
let width = parseFloat(prompt("Width: "));
console.log("Perimeter: ", 2 * (length + width));

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = parseFloat(prompt("Enter the radius of the circle:"));
const pi = 3.14;
let area = pi * radius * radius;
let circumference = 2 * pi * radius;

console.log("The area of the circle is: " + area);
console.log("The circumference of the circle is: " + circumference);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slope = 2; // The slope (m)
const yIntercept = -2; // The y-intercept (b)

const xIntercept = -yIntercept / slope; // x-intercept

console.log("Slope: " + slope);
console.log("Y-Intercept: (0, " + yIntercept + ")");
console.log("X-Intercept: (" + xIntercept + ", 0)");

// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let y1 = 2;
let x2 = 6;
let y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope between (2, 2) and (6, 10): " + slope2);

// 7. Compare the slope of above two questions.
let slope1 = 2; // Slope from question 5
if (slope1 === slope2) {
  console.log("The slopes are equal.");
} else if (slope1 > slope2) {
  console.log("The slope of the first equation is greater than the second.");
} else {
  console.log("The slope of the second equation is greater than the first.");
}

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = parseFloat(prompt("Enter a value for x:"));
let y = x * x + 6 * x + 9;
console.log("The value of y is: " + y);

// 9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = parseFloat(prompt("Enter hours:"));
let ratePerHour = parseFloat(prompt("Enter rate per hour:"));
let pay = hours * ratePerHour;
console.log("Your weekly earning is " + pay);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name:");
if (name.length > 7) {
  console.log("Your name is long.");
} else {
  console.log("Your name is short.");
}

// 11. Compare your first name length and your family name length and you should get this output.
let firstName = "Mustafa Samet";
let lastName = "Çalışır";
let firstNameLength = firstName.length;
let lastNameLength = lastName.length;
if (firstNameLength > lastNameLength) {
  console.log(
    "Your first name, " +
      firstName +
      " is longer than your family name, " +
      lastName
  );
} else if (firstNameLength < lastNameLength) {
  console.log(
    "Your family name, " +
      lastName +
      " is longer than your first name, " +
      firstName
  );
} else {
  console.log("Your first name and family name are of the same length.");
}

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 26;
let yourAge = 30;
if (myAge > yourAge) {
  console.log("I am " + (myAge - yourAge) + " years older than you.");
} else if (myAge < yourAge) {
  console.log("You are " + (yourAge - myAge) + " years older than me.");
} else {
  console.log("We are the same age.");
}

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birthYear = parseInt(prompt("Enter your birth year:"));
let currentYear = new Date().getFullYear(); // Get the current year
let age = currentYear - birthYear;
if (age >= 18) {
  console.log("You are " + age + " years old. You are old enough to drive.");
} else {
  let yearsToWait = 18 - age;
  console.log(
    "You are " +
      age +
      " years old. You will be allowed to drive after " +
      yearsToWait +
      " years."
  );
}

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = parseInt(prompt("Enter the number of years:"));
let secondsInYear = 365 * 24 * 60 * 60; // Number of seconds in a year
let totalSeconds = years * secondsInYear;
console.log("You have lived " + totalSeconds + " seconds.");

// 15. Create a human readable time format using the Date time object.
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`year:${date.getMonth()}`);
console.log(`year:${date.getDate()}`);
console.log(`year:${date.getDay()}`);
console.log(`year:${date.getHours()}`);
console.log(`year:${date.getMinutes()}`);
console.log(`year:${date.getSeconds()}`);

// i. YYYY-MM-DD HH:mm
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

// ii. DD-MM-YYYY HH:mm
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

// iii. DD/MM/YYYY HH:mm
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);

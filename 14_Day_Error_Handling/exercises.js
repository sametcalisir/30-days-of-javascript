// Exercises Level 1 -> Reference Error
try {
  let firstName = "Mustafa Samet";
  let fullName = firstName + " " + lastName;
} catch (err) {
  console.log(err);
}

// Exercise 2 -> TypeError Assignment to constant variable
const gravity = 9.81;
try {
  gravity = 2.76; // Trying to reassign a constant variable
} catch (err) {
  console.log(err);
}

// Exercise 3 -> TypeError: number.toUpperCase is not a function
try {
  let number = 9;
  let result = number.toUpperCase(); // number is a number, not a string
} catch (err) {
  console.log(err);
}

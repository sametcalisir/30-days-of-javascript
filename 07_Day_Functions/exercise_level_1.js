// Exercise Level 1

// 1. Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Mustafa Samet Çalışır");
}

fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Mustafa", "Samet Çalışır"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 10));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

console.log(perimeterOfRectangle(5, 10));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}

console.log(volumeOfRectPrism(5, 10, 15));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  const pi = 3.14;
  return pi * radius * radius;
}

console.log(areaOfCircle(5));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
  const pi = 3.14;
  return 2 * pi * radius;
}

console.log(circumOfCircle(5));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  return mass / volume;
}

console.log(density(10, 5));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
  return distance / time;
}

console.log(speed(100, 2));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  return mass * gravity;
}

console.log(weight(10, 9.81));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsiusToFahrenheit(0));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 24.9) {
    return "Normal";
  } else if (bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(calculateBMI(70, 1.75)); // Example: weight = 70 kg, height = 1.75 m

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  month = month.toLowerCase();
  if (["september", "october", "november"].includes(month)) {
    return "Autumn";
  } else if (["december", "january", "february"].includes(month)) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month)) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month)) {
    return "Summer";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason("March"));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c) {
  return Math.max(a, Math.max(b, c));
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

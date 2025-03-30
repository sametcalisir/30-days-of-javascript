// Exercise Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let exam = prompt("Enter an exam note:");
exam = Number(exam); // Convert the input to a number

if (exam >= 80 && exam <= 100) {
  console.log("A");
} else if (exam >= 70 && exam <= 89) {
  console.log("B");
} else if (exam >= 60 && exam <= 69) {
  console.log("C");
} else if (exam >= 50 && exam <= 59) {
  console.log("D");
} else if (exam >= 0 && exam <= 49) {
  console.log("F");
} else {
  console.log("Invalid exam note. Please enter a number between 0 and 100.");
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = prompt("Enter the name of the month:");

switch (month.toLowerCase()) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn.");
    break;
  case "december":
  case "january":
  case "february":
    console.log("The season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer.");
    break;
  default:
    console.log("Invalid month. Please enter a valid month name.");
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What is the day today?");

switch (day.toLowerCase()) {
  case "saturday":
  case "sunday":
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + " is a weekend.");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(
      day.charAt(0).toUpperCase() + day.slice(1) + " is a working day."
    );
    break;
  default:
    console.log("Invalid day. Please enter a valid day of the week.");
}

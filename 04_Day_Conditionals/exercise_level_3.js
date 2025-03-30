// Exercise Level 3

// 1. Write a program which tells the number of days in a month.
let month = prompt("Enter a month:");

switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(
      month.charAt(0).toUpperCase() + month.slice(1) + " has 31 days."
    );
    break;
  case "february":
    console.log(
      month.charAt(0).toUpperCase() + month.slice(1) + " has 28 days."
    );
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(
      month.charAt(0).toUpperCase() + month.slice(1) + " has 30 days."
    );
    break;
  default:
    console.log("Invalid month. Please enter a valid month name.");
}

// 2. Write a program that will tell the number of days in a month, now consider leap year.
let year = prompt("Enter a year:");
year = parseInt(year);

if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}

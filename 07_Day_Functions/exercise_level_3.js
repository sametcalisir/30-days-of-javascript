// Exercise Level 3

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  const numOfChars = parseInt(
    prompt("Enter the number of characters for each user ID:")
  );

  const numOfIds = parseInt(
    prompt("Enter the number of user IDs to generate:")
  );

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let userIds = [];

  for (let i = 0; i < numOfIds; i++) {
    let userId = "";
    for (let j = 0; j < numOfChars; j++) {
      userId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    userIds.push(userId);
  }

  console.log(userIds);
}

userIdGeneratedByUser();

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(rgbColorGenerator());

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function generateHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}

function arrayOfHexaColors(num) {
  const colorsArray = [];

  for (let i = 0; i < num; i++) {
    colorsArray.push(generateHexColor());
  }

  return colorsArray;
}

console.log(arrayOfHexaColors(5));

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function generateRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function arrayOfRgbColors(num) {
  const colorsArray = [];

  for (let i = 0; i < num; i++) {
    colorsArray.push(generateRgbColor());
  }

  return colorsArray;
}

console.log(arrayOfRgbColors(5));

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(convertHexaToRgb("#ff5733"));
console.log(convertHexaToRgb("#00ff00"));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(r, g, b) {
  const redHex = r.toString(16).padStart(2, "0");
  const greenHex = g.toString(16).padStart(2, "0");
  const blueHex = b.toString(16).padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`;
}

console.log(convertRgbToHexa(255, 87, 51));
console.log(convertRgbToHexa(0, 255, 0));

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateHexColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function generateRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateColors(num, format) {
  const colors = [];

  for (let i = 0; i < num; i++) {
    if (format === "hex") {
      colors.push(generateHexColor());
    } else if (format === "rgb") {
      colors.push(generateRgbColor());
    } else {
      console.log("Invalid format. Please use 'hex' or 'rgb'.");
      return;
    }
  }

  return colors;
}

console.log(generateColors(2, "hex"));
console.log(generateColors(2, "rgb"));

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
const arr = [1, 2, 3, 4, 5];
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffleArray(arr));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
  if (n < 0) {
    return "Input must be a non-negative integer";
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(input) {
  if (input == null) {
    return "Empty";
  }

  if (typeof input === "string" && input.trim() === "") {
    return "Empty";
  }

  if (Array.isArray(input) && input.length === 0) {
    return "Empty";
  }

  if (typeof input === "object" && Object.keys(input).length === 0) {
    return "Empty";
  }

  return "Not Empty";
}

console.log(isEmpty("Text"));
console.log(isEmpty(""));
console.log(isEmpty(undefined));
console.log(isEmpty(null));
console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty({}));
console.log(isEmpty({ name: "Samet" }));

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr) {
  if (!Array.isArray(arr)) {
    return "The input is not an array.";
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return `Item at index ${i} is not a number.`;
    }
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

console.log(sumOfArrayItems([1, "a", 3]));
console.log(sumOfArrayItems([5, 10, "hello", 2]));
console.log(sumOfArrayItems("not an array"));
console.log(sumOfArrayItems([1, 2, 3, 4.5]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
  if (!Array.isArray(arr)) {
    return "The input is not an array.";
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return `Item at index ${i} is not a number.`;
    }
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const avg = sum / arr.length;
  return avg;
}

console.log(average([1, 2, 3]));
console.log(average([10, 20, 30, 40]));
console.log(average([1, "a", 3]));
console.log(average([5, 10, "hello", 2]));
console.log(average("not an array"));
console.log(average([1, 2, 3, 4.5]));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(arr) {
  if (arr.length < 5) {
    return "Item not found";
  }

  arr[4] = arr[4].toUpperCase();

  return arr;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);

console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"]));

// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(11));
console.log(isPrime(1));
console.log(isPrime(7));

// 16. Write a functions which checks if all items are unique in the array.
function unique(arr) {
  const uniqueItems = new Set(arr);

  return uniqueItems.size === arr.length;
}

console.log(unique([1, 2, 3, 4, 5]));
console.log(unique([1, 2, 2, 4, 5]));
console.log(unique(["apple", "banana", "orange"]));
console.log(unique(["apple", "banana", "apple"]));
console.log(unique([1, 1, 1, 1]));
console.log(unique([10]));

// 17. Write a function which checks if all the items of the array are the same data type.
function areAllItemsSameType(arr) {
  if (arr.length === 0) {
    return true;
  }

  const firstItemType = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== firstItemType) {
      return false;
    }
  }

  return true;
}

console.log(areAllItemsSameType([1, 2, 3, 4]));
console.log(areAllItemsSameType([1, "2", 3, 4]));
console.log(areAllItemsSameType(["apple", "banana"]));
console.log(areAllItemsSameType([true, true, true]));
console.log(areAllItemsSameType([1, 2, true, 4]));
console.log(areAllItemsSameType([]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
  const regex = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

  const reservedKeywords = [
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "let",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
  ];

  if (reservedKeywords.includes(variable)) {
    return false;
  }

  return regex.test(variable);
}

console.log(isValidVariable("myVar"));
console.log(isValidVariable("my_var"));
console.log(isValidVariable("var$"));
console.log(isValidVariable("myVar123"));
console.log(isValidVariable("123myVar"));
console.log(isValidVariable("my@Var"));
console.log(isValidVariable("let"));
console.log(isValidVariable("_privateVar"));
console.log(isValidVariable("$dollarVar"));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers() {
  const numbers = new Set();

  while (numbers.size < 7) {
    const randomNum = Math.floor(Math.random() * 10);
    numbers.add(randomNum);
  }

  return Array.from(numbers);
}

console.log(sevenRandomNumbers());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
  "Turkey",
  "Albania",
  "Canada",
  "Italy",
  "Germany",
  "Portugal",
];

function reverseCountries(countries) {
  const copiedArray = [...countries];

  const reversedArray = copiedArray.reverse();

  return reversedArray;
}

console.log(reverseCountries(countries));

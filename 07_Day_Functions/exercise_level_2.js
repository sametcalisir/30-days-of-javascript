// Exercise Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x = null, y = null) {
  if (x !== null) {
    let y = (-a * x - c) / b;
    return y;
  }

  // If y is provided, calculate x
  if (y !== null) {
    let x = (-b * y - c) / a;
    return x;
  }

  return "Error: You must provide either x or y.";
}

console.log(solveLinEquation(2, 3, 6, 4));

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    return [x];
  } else {
    return "No real roots";
  }
}

console.log(solveQuadEquation(1, 4, 4)); // {-2}
console.log(solveQuadEquation(1, -1, -2)); // {2, -1}
console.log(solveQuadEquation(1, 7, 12)); // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)); //{2, -2}
console.log(solveQuadEquation(1, -1, 0)); //{1, 0}

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  arr.forEach((item) => console.log(item));
}
printArray([1, 2, 3, 4, 5]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  let date = new Date();
  let options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("en-US", options).replace(",", "");
}

console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  return [y, x];
}

console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"])); // ['C', 'B', 'A']

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let names = ["Samet", "Mustafa", "Semih", "Enes"];
function capitalizeArray(word) {
  let newArray = [];
  for (let i = 0; i < names.length; i++) {
    newArray.push(word[i]);
    word[i] = names[i].toUpperCase();
  }

  return word;
}

console.log(capitalizeArray(names));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  const itemsArray = [];
  itemsArray.push(item);
  return itemsArray;
}

console.log(addItem("apple"));
console.log(addItem("banana"));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  const itemsArray = ["apple", "banana", "orange"];
  if (index > -1 && index < itemsArray.length) {
    itemsArray.splice(index, 1);
  }
  return itemsArray;
}

console.log(removeItem(1));

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNumbers(5));
console.log(sumOfNumbers(10));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfOdds(5));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumOfEven(5));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  return `The number of odds are ${odd}. The number of evens are ${even}.`;
}

console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sumOfArguments(1, 2, 3));
console.log(sumOfArguments(1, 2, 3, 4));

// 15. Writ a function which generates a randomUserIp.
function randomUserIp() {
  let ip = "";
  for (let i = 0; i < 4; i++) {
    ip += Math.floor(Math.random() * 256);
    if (i < 3) {
      ip += ".";
    }
  }
  return ip;
}

console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress
function randomMacAddress() {
  let mac = "";
  for (let i = 0; i < 6; i++) {
    mac += Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    if (i < 5) {
      mac += ":";
    }
  }
  return mac;
}

console.log(randomMacAddress());

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  let hex = "#";
  const hexChars = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    hex += hexChars[Math.floor(Math.random() * 16)];
  }
  return hex;
}

console.log(randomHexaNumberGenerator());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

console.log(userIdGenerator());

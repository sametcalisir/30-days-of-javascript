// Exercise Level 1

// 1. Explain the difference between forEach, map, filter, and reduce.

// Foreach:  Used to loop through each array element (only for arrays).

// Map:  Similar to foreach but we can change the property of the element

// Filter: It filters according to the specific situation.

// Reduce: Returns a single value.

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

// forEach
// function logElement(element) {
//   console.log(element);
// }

// const numbers = [1, 2, 3, 4];
// numbers.forEach(logElement);

// map
// function doubleNumber(element) {
//   return element * 2;
// }

// const numbers = [1, 2, 3, 4];
// const doubledNumbers = numbers.map(doubleNumber);
// console.log(doubledNumbers);

// filter
// function isEven(element) {
//   return element % 2 === 0;
// }

// const numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// reduce
// function sum(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// const numbers = [1, 2, 3, 4];
// const totalSum = numbers.reduce(sum, 0);
// console.log(totalSum);

// 3. Use forEach to console.log each country in the countries array.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

countries.forEach((country) => {
  console.log(country);
});

// 4. Use forEach to console.log each name in the names array.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

names.forEach((name) => {
  console.log(name);
});

// 5. Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
  console.log(number);
});

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const upperCaseCountries = countries.map((country) => country.toUpperCase());
console.log(upperCaseCountries);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);

// 9. Use map to change to each name to uppercase in the names array
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

// 10. Use map to map the products array to its corresponding prices.
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productPrices = products.map((product) => product.price);
console.log(productPrices);

// 11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter((countery) => {
  return countery.includes("land");
});

console.log(countriesWithLand);

// 12. Use filter to filter out countries having six character.
const countriesWithSixCharacters = countries.filter((country) => {
  return country.length === 6;
});

console.log(countriesWithSixCharacters);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixLetterOrMore = countries.filter((country) => {
  return country.length >= 6;
});

console.log(countriesWithSixLetterOrMore);

// 14. Use filter to filter out country start with 'E';
const countriesStartWithE = countries.filter((country) => {
  return country.startsWith("E");
});

console.log(countriesStartWithE);
// 15. Use filter to filter out only prices with values.
const productsWithValues = products.filter((product) => {
  return product.price !== " " && product.price !== "";
});

console.log(productsWithValues);
// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter(function (item) {
    return typeof item === "string";
  });
}

const stringArray = [1, "apple", true, "banana", 42, "cherry"];
console.log(getStringLists(stringArray));

// 17. Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sumOfNumbers);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenatedSentence =
  countries.reduce((sentence, country, index) => {
    if (index === countries.length - 1) {
      return sentence + "and " + country;
    } else {
      return sentence + country + ", ";
    }
  }, "Estonia, ") + " are north European countries";

console.log(concatenatedSentence);

// 19. Explain the difference between some and every
// Some   :   Checks whether all items are similar.
// Every  :   Checks whether some items are similar.

// 20. Use some to check if some names' length greater than seven in names array
const someControl = names.some((nameSome) => {
  return nameSome.length > 7;
});
console.log(someControl);

// 21. Use every to check if all the countries contain the word land
const everyControl = countries.every((country) => {
  return country.includes("land");
});

console.log(everyControl);

// 22. Explain the difference between find and findIndex.
// find      :   Returns the first value of the condition met
// findIndex :   Returns the position of the first element that satisfies the condition

// 23. Use find to find the first country containing only six letters in the countries array
const firstCountryWithSixLetters = countries.find((country) => {
  return country.length === 6;
});

console.log(firstCountryWithSixLetters);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const firstCountryWithSixLettersIndex = countries.findIndex((country) => {
  return country.length === 6;
});

console.log(firstCountryWithSixLettersIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex((country) => {
  return country === "Norway";
});

console.log(findNorway);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indexRussia = countries.findIndex((counrty) => {
  return counrty === "Russia";
});

console.log(indexRussia);

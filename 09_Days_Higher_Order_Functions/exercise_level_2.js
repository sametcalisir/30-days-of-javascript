// Exercise Level 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const totalPrice = products
  .map((product) => product.price)
  .filter((price) => price > 0)
  .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
const totalPriceSecond = products.reduce((accumulator, currentProduct) => {
  const price = parseFloat(currentProduct.price);
  if (!isNaN(price)) {
    return accumulator + price;
  }
  return accumulator;
}, 0);

console.log(totalPriceSecond);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
import { countries } from "./countries_data.js";

function categorizeCountries() {
  const patterns = ["land", "ia", "island", "stan"];
  const categorizedCountries = {};

  patterns.forEach((pattern) => {
    const countriesWithPattern = countries.filter((country) =>
      country.name.toLowerCase().includes(pattern.toLowerCase())
    );
    categorizedCountries[pattern] = countriesWithPattern;
  });

  return categorizedCountries;
}

const categorizedCountries = categorizeCountries();
console.log(categorizedCountries);

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countStartingLetters() {
  const letterCounts = {};
  countries.forEach((country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (/[A-Z]/.test(firstLetter)) {
      letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    }
  });

  const resultArray = Object.entries(letterCounts).map(([letter, count]) => ({
    letter,
    count,
  }));

  return resultArray;
}

console.log(countStartingLetters());

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  const firstTenCountries = countries.slice(0, 10);
  return firstTenCountries;
}

console.log(getFirstTenCountries());

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  const lastTenCountries = countries.slice(-10);
  return lastTenCountries;
}

console.log(getLastTenCountries());

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function findMostUsedInitialLetter() {
  const initialLetterCounts = countries.reduce((counts, country) => {
    const firstLetter = country.name.charAt(0).toUpperCase();
    if (/[A-Z]/.test(firstLetter)) {
      counts[firstLetter] = (counts[firstLetter] || 0) + 1;
    }
    return counts;
  }, {});

  let mostUsedLetter = "";
  let maxCount = 0;

  for (const letter in initialLetterCounts) {
    if (initialLetterCounts[letter] > maxCount) {
      maxCount = initialLetterCounts[letter];
      mostUsedLetter = letter;
    }
  }

  return mostUsedLetter;
}

console.log(findMostUsedInitialLetter());

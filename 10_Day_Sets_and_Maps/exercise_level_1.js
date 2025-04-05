// Exercise Level 1

// 1. Create an empty set
const empty = new Set();
console.log(empty);

// 2. Create a set containing 0 to 10 using loop
const numberLoop = new Set();
for (let i = 0; i <= 10; i++) {
  numberLoop.add(i);
}

console.log(numberLoop);

// 3. Remove an element from a set
const companies = new Set([
  "Google",
  "Facebook",
  "Amazon",
  "Oracle",
  "Microsoft",
]);

companies.delete("Oracle");
console.log(companies);

// 4. Clear a set
const number = new Set([1, 2, 3, 4, 5]);
number.clear();
console.log(number);

// 5. Create a set of 5 string elements from array
const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Turkish",
  "Spanish",
  "English",
  "French",
  "Turkish",
];

const setOfLanguuage = new Set(languages);
console.log(setOfLanguuage);

// 6. Create a map of countries and number of characters of a country
const country = ["Turkey", "England", "Spain", "Portugal", "Italy"];
const countryMap = new Map();

country.forEach((countries) => {
  countryMap.set(countries, countries.length);
});

console.log(countryMap);

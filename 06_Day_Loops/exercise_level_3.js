// Exercise Level 3

// 1. Copy countries array(Avoid mutation)
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

console.log([...countries]);

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const sortedCountries = [...countries].sort();

console.log("Original array:", countries);
console.log("Sorted array:", sortedCountries);

// 3. Sort the webTechs array and mernStack array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const mernStack = ["MongoDB", "Express", "React", "Node"];

const sortedWebTechs = [...webTechs].sort();
const sortedMernStack = [...mernStack].sort();

console.log("Sorted web technologies:", sortedWebTechs);
console.log("Sorted MERN stack:", sortedMernStack);

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
const arr = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    arr.push(countries[i]);
  }
}

console.log(arr);

// 5. Find the country containing the hightest number of characters in the countries array
const longestCountry = countries.sort((a, b) => b.length - a.length)[0];
console.log(longestCountry);

// 6. Extract all the countries contain the word 'land' from the countries array and print it as array
const countriesWithLand = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesWithLand.push(countries[i]);
  }
}

console.log(countriesWithLand);

// 7. Extract all the countries containing only four characters from the countries array and print it as array
const fourCharCountries = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourCharCountries.push(countries[i]);
  }
}

console.log(fourCharCountries);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
const countriesWithMultipleWords = [];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes(" ")) {
    countriesWithMultipleWords.push(countries[i]);
  }
}

console.log(countriesWithMultipleWords);

// 9. Reverse the countries array and capitalize each country and stored it as an array
const reversedAndCapitalizedCountries = [];

for (let i = countries.length - 1; i >= 0; i--) {
  reversedAndCapitalizedCountries.push(countries[i].toUpperCase());
}

console.log(reversedAndCapitalizedCountries);

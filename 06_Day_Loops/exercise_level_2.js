// Exercise Level 2

// 1. Develop a small script which generate any number of characters random id:
const length = 24;
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomId = "";

for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  randomId += characters.charAt(randomIndex);
}

console.log(randomId);

// 2. Write a script which generates a random hexadecimal number.
const randomHex = Math.floor(Math.random() * 16777215).toString(16);
console.log(`#${randomHex}`);

// 3. Write a script which generates a random rgb color number.
const randomR = Math.floor(Math.random() * 256);
const randomG = Math.floor(Math.random() * 256);
const randomB = Math.floor(Math.random() * 256);
const randomRgb = `rgb(${randomR}, ${randomG}, ${randomB})`;
console.log(randomRgb);

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
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

for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
}

console.log(countries);

// 5. Using the above countries array, create an array for countries length'.
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].length;
}

console.log(countries);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
const countries7 = [
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

const arr = [];

for (let i = 0; i < countries7.length; i++) {
  if (countries7[i].includes("land")) arr.push(countries7[i]);
}

if (arr.length > 0) {
  console.log(arr);
} else {
  console.log("All these countries are without land");
}

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
const countries8 = [
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

const result = [];

for (let i = 0; i < countries8.length; i++) {
  if (countries8[i].endsWith("ia")) {
    result.push(countries8[i]);
  }
}

if (result.length > 0) {
  console.log(result);
} else {
  console.log("These are countries ends without ia");
}

// 9. Using the above countries array, find the country containing the biggest number of characters.
const countries9 = [
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

let longest = countries9.sort((a, b) => b.length - a.length)[0];
console.log(longest);

// 10. Using the above countries array, find the country containing only 5 characters.
const countries10 = [
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

let fiveArr = [];

for (let i = 0; i < countries9.length; i++) {
  if (countries9[i].length === 5) {
    fiveArr.push(countries9[i]);
  }
}

console.log(fiveArr);

// 11. Find the longest word in the webTechs array.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWord = webTechs.sort((a, b) => b.length - a.length)[0];
console.log(longestWord);

// 12. Use the webTechs array to create the following array of arrays:
const techsWithLength = [];

for (let i = 0; i < webTechs.length; i++) {
  techsWithLength.push([webTechs[i], webTechs[i].length]);
}

console.log(techsWithLength);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];

let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 1);
}

console.log(mern);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const array = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let techs of array) {
  console.log(techs);
}

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ["banana", "orange", "mango", "lemon"];
const reverse = [];

for (let i = fruit.length - 1; i >= 0; i--) {
  reverse.push(fruit[i]);
}

console.log(reverse);

// 16. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

fullStack.forEach((fullStack) => {
  fullStack.forEach((techs) => {
    var upper = techs.toUpperCase();
    console.log(upper);
  });
});

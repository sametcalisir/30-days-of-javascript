// Exercise Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from "./countries.js";

import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let replace = text.replace(/[^a-zA-Z0-9 ]/gi, "");
let split = replace.split(" ");
console.log(split);
console.log(split.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// i. add "Meat" in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");

// ii. add "Sugar" at the end of you shopping cart if it has not been already added
shoppingCart.push("Sugar");

// iii. remove "Honey" if you are allergic to honey
shoppingCart.splice(4, 1);

// iv. modify Tea to "Green Tea"
shoppingCart[3] = "Green Tea";

console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess' else print 'Sass is not a CSS preprocess'
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  console.log("Sass is not a CSS preprocess");
}

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB", "Python", "Django"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

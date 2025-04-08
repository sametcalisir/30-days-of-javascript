// Exercise Level 3

// 1. Check the speed difference among the following loops: while, for, for of, forEach
import { countries } from "./countries_data.js";

// while
console.time("While Loop Time");
let i = 0;
while (i < countries.length) {
  console.log(countries[i]);
  i++;
}
console.timeEnd("While Loop Time");
console.warn("While Loop Finish");

// for
console.time("For Loop Time");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
console.timeEnd("For Loop Time");
console.warn("For Loop Finish");

// for of
console.time("For of Time");
for (const country of countries) {
  console.log(country);
}
console.timeEnd("For of Time");
console.warn("For of Finish");

// forEach
console.time("ForEach Loop");
countries.forEach((x) => console.log(x));
console.timeEnd(`ForEach Loop`);
console.warn("ForEach Loop Finish");

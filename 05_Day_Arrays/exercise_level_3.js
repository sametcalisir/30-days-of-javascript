// Exercise level 3

import { countries } from "./countries.js";

// 1. The following is an array of 10 students ages:
// [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// i. Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log(`Sorted ages: ${sortedAges}`);
console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);

// ii. Find the median age (one middle value or two middle values divided by two)
const middleIndex = Math.floor(sortedAges.length / 2);
let medianAge;
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  medianAge = sortedAges[middleIndex];
}
console.log(`Median age: ${medianAge}`);

// iii. Find the average age (sum of all ages divided by number of students)
const sumOfAges = sortedAges.reduce((acc, age) => acc + age, 0);
const averageAge = sumOfAges / sortedAges.length;
console.log(`Average age: ${averageAge}`);

// iv. Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;
console.log(`Age range: ${ageRange}`);

// v. Compare the value of (min - average) and (max - average), use abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);
console.log(`Difference between min and average: ${minAverageDiff}`);
console.log(`Difference between max and average: ${maxAverageDiff}`);

// 2. Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log(`First ten countries: ${firstTenCountries}`);

// 3. Find the middle country(ies) in the countries array
const middleIndexCountries = Math.floor(countries.length / 2);
let middleCountries;
if (countries.length % 2 === 0) {
  middleCountries = countries.slice(
    middleIndexCountries - 1,
    middleIndexCountries + 1
  );
} else {
  middleCountries = countries[middleIndexCountries];
}
console.log(`Middle country(ies): ${middleCountries}`);

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const halfIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfIndex);
const secondHalf = countries.slice(halfIndex);
console.log(`First half: ${firstHalf}`);
console.log(`Second half: ${secondHalf}`);

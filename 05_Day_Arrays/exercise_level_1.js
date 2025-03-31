// Exercise Level 1

// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Find the length of your array
let arrayLength = numbersArray.length;
console.log(`Length of the array: ${arrayLength}`);

// 4. Get the first item, the middle item and the last item of the array
let firstItem = numbersArray[0];
let middleItem = numbersArray[Math.floor(numbersArray.length / 2)];
let lastItem = numbersArray[numbersArray.length - 1];
console.log(
  `First item: ${firstItem}, Middle item: ${middleItem}, Last item: ${lastItem}`
);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Samet", 26, false, undefined, null, {}];
let mixedArrayLength = mixedDataTypes.length;
console.log(`Length of mixedDataTypes array: ${mixedArrayLength}`);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(`Number of companies: ${itCompanies.length}`);

// 9. Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log(
  `First company: ${firstCompany}, Middle company: ${middleCompany}, Last company: ${lastCompany}`
);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
  console.log(itCompanies[i]);
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let companyList =
  itCompanies.slice(0, itCompanies.length - 1).join(", ") +
  " and " +
  itCompanies[itCompanies.length - 1];

let sentence = companyList + " are big IT companies.";
console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array. If it exists, return the company else return a company is not found
let searchCompany = "Google";
if (itCompanies.includes(searchCompany)) {
  console.log(`${searchCompany} exists in the array.`);
} else {
  console.log(`${searchCompany} is not found in the array.`);
}

// 14. Filter out companies which have more than one 'o' without the filter method
let filterControl = [];
for (let i = 0; i < itCompanies.length; i++) {
  filterControl.push(itCompanies[i].includes("O"));
}
console.log(filterControl);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);

// 17. Slice out the first 3 companies from the array
let slicedCompanies = itCompanies.slice(0, 3);
console.log(slicedCompanies);

// 18. Slice out the last 3 companies from the array
let slicedLastCompanies = itCompanies.slice(-3);
console.log(slicedLastCompanies);

// 19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
let middleSlice;
let middleSliceLength = itCompanies.length % 2 === 0 ? 2 : 1;
if (middleSliceLength === 2) {
  middleSlice = itCompanies.slice(middleIndex - 1, middleIndex + 1);
} else {
  middleSlice = itCompanies.slice(middleIndex, middleIndex + 1);
}
console.log(middleSlice);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
let middleRemoveIndex = Math.floor(itCompanies.length / 2);
let middleRemoveLength = itCompanies.length % 2 === 0 ? 2 : 1;
if (middleRemoveLength === 2) {
  itCompanies.splice(middleRemoveIndex - 1, middleRemoveLength);
} else {
  itCompanies.splice(middleRemoveIndex, middleRemoveLength);
}
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

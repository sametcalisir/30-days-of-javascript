// Exercise Level 3

// 1. How many languages are there in the countries object file.
import { countries } from "./countries_data.js";

function countUniqueLanguages(countriesObject) {
  const allLanguages = new Set();

  for (const country in countriesObject) {
    const languages = countriesObject[country].languages;

    languages.forEach((language) => allLanguages.add(language));
  }

  return allLanguages.size;
}

const numberOfLanguages = countUniqueLanguages(countries);
console.log("Number of unique languages:", numberOfLanguages);

// 2. Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries, count) {
  const languageCount = {};

  for (const country of countries) {
    const countryLanguages = country.languages;
    for (const language of countryLanguages) {
      if (languageCount[language]) {
        languageCount[language]++;
      } else {
        languageCount[language] = 1;
      }
    }
  }

  const sortedLanguages = Object.entries(languageCount).sort(
    (a, b) => b[1] - a[1]
  );
  const mostSpoken = sortedLanguages.slice(0, count);

  const result = mostSpoken.map(([language, count]) => ({ [language]: count }));

  return result;
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));

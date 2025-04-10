// Exercise Level 3

// 1. Read the cats api and find the average weight of cat in metric unit.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const weights = data.map((cat) => {
      const [min, max] = cat.weight.metric.split(" - ").map(parseFloat);
      return (min + max) / 2;
    });

    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const averageWeight = totalWeight / weights.length;

    console.log(
      "Average Weight of Cats (in metric unit):",
      averageWeight.toFixed(2),
      "kg"
    );
  })
  .catch((error) => console.error("Error fetching data:", error));

// 2. Read the countries api and find out the 10 largest countries
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const sortedCountries = data.sort((a, b) => b.area - a.area);
    const largestCountries = sortedCountries.slice(0, 10);
    console.log("Largest 10 Countries");
    largestCountries.forEach((country, index) => {
      console.log(`${index}, ${country.name} - Area:${country.area}`);
    });
  })
  .catch((error) => console.log("Error", error));

// 3. Read the countries api and count total number of languages in the world used as officials.
fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    const officialLanguages = new Set();

    data.forEach((country) => {
      if (country.languages && country.languages.length > 0) {
        country.languages.forEach((language) =>
          officialLanguages.add(language.name)
        );
      }
    });

    const totalLanguages = officialLanguages.size;

    console.log(
      "Total number of languages used as official languages in the world:",
      totalLanguages
    );
  })
  .catch((error) => console.error("Error", error));

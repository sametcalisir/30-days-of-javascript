// Exercise Level 2

// 1. Print out all the cat names in to catNames variable.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const catNames = data.map((cat) => cat.name);
    console.log(catNames);
  })
  .catch((error) => console.error("Error", error));

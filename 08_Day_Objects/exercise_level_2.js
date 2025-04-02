// Exercise Level 2

// 1. Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let maxSkillsPerson = null;
let maxSkillsCount = 0;

for (const user in users) {
  if (users[user].skills.length > maxSkillsCount) {
    maxSkillsCount = users[user].skills.length;
    maxSkillsPerson = user;
  }
}

console.log("Person with the most skills:", maxSkillsPerson);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
const loggedInCount = Object.values(users).filter(
  (user) => user.isLoggedIn
).length;
const highPointsCount = Object.values(users).filter(
  (user) => user.points >= 50
).length;

console.log("Number of logged-in users:", loggedInCount);
console.log("Number of users with >= 50 points:", highPointsCount);

//2. Solution 2
// let loggedInCount = 0;

// for (const user in users) {
//   if (users[user].isLoggedIn) {
//     loggedInCount++;
//   }
// }

// console.log("Number of logged-in users:", loggedInCount);

// let highPointsCount = 0;

// for (const user in users) {
//   if (users[user].points >= 50) {
//     highPointsCount++;
//   }
// }

// console.log("Number of users with >= 50 points:", highPointsCount);

// 3. Find people who are MERN stack developer from the users object
function findMERNDevelopers(users) {
  const mernStackSkills = ["MongoDB", "Express", "React", "Node"];

  let mernDevelopers = [];

  for (const user in users) {
    const userSkills = users[user].skills;

    if (mernStackSkills.every((skill) => userSkills.includes(skill))) {
      mernDevelopers.push(user);
    }
  }

  return mernDevelopers;
}

const mernDevelopers = findMERNDevelopers(users);
console.log("MERN stack developers:", mernDevelopers);

// 4. Set your name in the users object without modifying the original users object
const newUser = {
  Samet: {
    email: "samet@calisir.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 26,
    isLoggedIn: true,
    points: 100,
  },
};

const updatedUsers = { ...users, ...newUser };
console.log(updatedUsers);

// 4. Solution 2
const copyUsers = Object.assign({}, users);
copyUsers["Samet"] = {
  email: "samet@calisir.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 26,
  isLoggedIn: true,
  points: 100,
};

console.log(copyUsers);

// 5. Get all keys or properties of users object
const keys = Object.keys(users);
console.log(keys);

// 6. Get all the values of users object
const values = Object.values(users);
console.log(values);

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = [
  {
    name: "Albania",
    capital: "Tirana",
    population: 2877797,
    languages: ["Albanian"],
  },
  {
    name: "Bolivia",
    capital: "Sucre",
    population: 11673029,
    languages: ["Spanish", "Quechua", "Aymara"],
  },
  {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    languages: ["English", "French"],
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    population: 5818553,
    languages: ["Danish"],
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    population: 114963588,
    languages: ["Amharic"],
  },
  {
    name: "Finland",
    capital: "Helsinki",
    population: 5530719,
    languages: ["Finnish", "Swedish"],
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83783942,
    languages: ["German"],
  },
  {
    name: "Hungary",
    capital: "Budapest",
    population: 9660351,
    languages: ["Hungarian"],
  },
  {
    name: "Ireland",
    capital: "Dublin",
    population: 4937786,
    languages: ["Irish", "English"],
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126854745,
    languages: ["Japanese"],
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    population: 53771296,
    languages: ["English", "Swahili"],
  },
];

for (const country of countries) {
  console.log(`Country: ${country.name}`);
  console.log(`Capital: ${country.capital}`);
  console.log(`Population: ${country.population}`);
  console.log(`Languages: ${country.languages.join(", ")}`);
  console.log("----------------------------");
}

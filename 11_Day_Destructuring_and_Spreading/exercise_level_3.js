// Exercise Level 3

// 1. Destructure the countries object print name, capital, population and languages of all countries
import { countries } from "./countries_data.js";
for (const [countryKey, countryValue] of Object.entries(countries)) {
  const { name, capital, population, languages } = countryValue;

  console.log(countryKey, name, capital, population, languages);
}

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [, , jsScore, reactScore] = scores;

console.log(name, skills, jsScore, reactScore);

// 3. Write a function called convertArrayToObject which can convert the array to a structure object.
function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({
    name,
    skills,
    scores,
  }));
}

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

console.log(convertArrayToObject(students));

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// i. Add Bootstrap with level 8 to the front end skill sets
// ii. Add Express with level 9 to the back end skill sets
// iii. Add SQL with level 8 to the data base skill sets
// iv. Add SQL without level to the data science skill sets
const studentObj = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [...studentObj.skills.frontEnd, { skill: "BootStrap", level: 8 }],
    backEnd: [...studentObj.skills.backEnd, { skill: "Express", level: 9 }],
    dataBase: [...studentObj.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...studentObj.skills.dataScience, "SQL"],
  },
};

console.log(newStudent);

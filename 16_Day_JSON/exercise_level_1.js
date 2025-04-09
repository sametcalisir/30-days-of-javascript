// Exercise Level 1

// 1. Change skills array to JSON using JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const convert = JSON.stringify(skills);
console.log(convert);

// 2. Stringify the age variable
let age = 250;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

// 3. Stringify the isMarried variable
let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

// 4. Stringify the student object
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const studentConvert = JSON.stringify(student);
console.log(studentConvert);

// Exercise Level 2

// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstName: "Mustafa Samet",
  lastName: "Çalışır",
  age: 26,
  skills: ["HTML", "CSS", "SCSS", "Tailwind", "Bootstrap"],
  country: "Turkey",
};

const convertJSON = JSON.stringify(student);
localStorage.setItem("Student", convertJSON);

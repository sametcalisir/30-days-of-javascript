// Exercise Level 1

// 1. Create an empty object called dog
// let dog = {};

// 2. Print the the dog object on the console
// console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
const dog = {
  name: "Buddy",
  legs: 4,
  color: "brown",
  age: 3,
  bark: function () {
    return "woof woof";
  },
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = "Dalmatia";

dog.getDogInfo = function () {
  return `Name: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}, Legs: ${this.legs}`;
};

console.log(dog.getDogInfo());

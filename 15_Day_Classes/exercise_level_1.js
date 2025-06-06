// Exercise Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs:  ${this.legs}`
    );
  }

  animalType(type) {
    console.log(`${this.name} is ${type} `);
  }

  animalBreed(breed) {
    console.log(`${this.name} is ${breed}`);
  }
}

const animal1 = new Animal("Lucky", 2, "Black and White", 4);
animal1.animalType("Mammalia");
animal1.animalBreed("Dalmatia");
animal1.displayInfo();

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }

  get getGender() {
    return this.gender;
  }

  getInfo() {
    return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
  }
}

let dogInfos = new Dog("Smile", 1, "Brown", 4, "Female");
console.log(dogInfos.getInfo());

class Cat extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }

  get getGender() {
    return this.gender;
  }

  getInfo() {
    return `Name: ${this.name}, Gender: ${this.gender}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
  }
}
const cats = new Cat("Apple", 3, "White", 4, "Male");
console.log(cats.getInfo());

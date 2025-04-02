// Exercise Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: "Samet",
  lastName: "Çalışır",
  incomes: {
    salary: 15000,
    courses: 3745,
  },
  expenses: {
    rent: 4500,
    food: 2975,
  },

  totalIncome: function () {
    let total = 0;
    for (const income of Object.keys(this.incomes)) {
      total += this.incomes[income];
    }
    return total;
  },

  totalExpense: function () {
    let total = 0;
    for (const charge of Object.keys(this.expenses)) {
      total += this.expenses[charge];
    }
    return total;
  },

  accountInfo() {
    return `${this.firstName} ${this.lastName}`;
  },

  addIncome(incomeName, value) {
    this.incomes[incomeName] = value;
  },

  addExpense(expenseName, value) {
    this.expenses[expenseName] = value;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountInfo());
personAccount.addIncome("Annual", 15000);
personAccount.addExpense("Art", 750);
console.log("Total Income: ", personAccount.totalIncome());
console.log("Balance: ", personAccount.accountBalance());

// Imagine you are getting the above users collection from a MongoDB database.
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(newUser) {
  const existingUser = users.find((user) => user.email === newUser.email);
  if (existingUser) {
    return "User already has an account.";
  }

  users.push(newUser);
  return "User added successfully.";
}

// b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    user.isLoggedIn = true;
    return "User signed in successfully.";
  }

  return "Invalid email or password.";
}

const newUser = {
  username: "Sam",
  email: "sam@sam.com",
  password: "123445",
};

console.log(signUp(newUser)); // "User added successfully."
console.log(signIn("sam@sam.com", "123445")); // "User signed in successfully."
console.log(signUp(newUser)); // "User already has an account."

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    return "Product not found.";
  }

  const existingRating = product.ratings.find(
    (rating) => rating.userId === userId
  );
  if (existingRating) {
    return "User has already rated this product.";
  }

  product.ratings.push({ userId, rate: rating });
  return "Product rated successfully.";
}

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  const product = products.find((product) => product._id === productId);

  if (!product || product.ratings.length === 0) {
    return "No ratings available for this product.";
  }

  const totalRatings = product.ratings.reduce(
    (sum, rating) => sum + rating.rate,
    0
  );
  const average = totalRatings / product.ratings.length;

  return `Average rating: ${average.toFixed(2)}`;
}

console.log(rateProduct("eedfcf", "ghderc", 4)); // "Product rated successfully."
console.log(rateProduct("eedfcf", "fg12cy", 3)); // "User has already rated this product."
console.log(rateProduct("unknownId", "ghderc", 5)); // "Product not found."

console.log(averageRating("eedfcf")); // "Average rating: 4.50"
console.log(averageRating("aegfal")); // "No ratings available for this product."

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productId, userId) {
  const product = products.find((product) => product._id === productId);

  if (!product) {
    console.log("Product not found");
    return;
  }

  const isLiked = product.likes.includes(userId);

  if (isLiked) {
    product.likes = product.likes.filter((like) => like !== userId);
    console.log(`User ${userId} has unliked the product: ${product.name}`);
  } else {
    product.likes.push(userId);
    console.log(`User ${userId} has liked the product: ${product.name}`);
  }
}

likeProduct("eedfcf", "fg12cy"); // User "fg12cy" unlikes or likes the product with id "eedfcf"
likeProduct("aegfal", "fg12cy"); // User "fg12cy" unlikes or likes the product with id "aegfal"

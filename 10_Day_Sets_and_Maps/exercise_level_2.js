// Exercise Level 2

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1. Find a union b
const union = new Set([...a, ...b]);
console.log("Union:", [...union]);

// 2. Find a intersection b
const setB = new Set(b);

const intersection = a.filter((item) => setB.has(item));
console.log("Intersection:", intersection);

// 3. Find a with b
const difference = a.filter((item) => !setB.has(item));
console.log("Difference (a - b):", difference);

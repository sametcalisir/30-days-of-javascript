// Exercise Level 1

// 1. Iterate 0 to 10 using a while loop, do the same using a for loop.
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let j = 0; j <= 10; j++) {
  console.log(j);
}

// 2. Iterate 10 to 0 using a while loop, do the same using a for loop.
let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

// 3. Iterate 0 to n using a for loop.
let n = 10;
for (let l = 0; l <= n; l++) {
  console.log(l);
}

// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let pattern = "#";
for (let m = 0; m < 7; m++) {
  console.log(pattern);
  pattern += "#";
}

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for (let n = 0; n <= 10; n++) {
  console.log(`${n} x ${n} = ${n * n}`);
}

// 6. Using loop print the following pattern
// i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
for (let o = 0; o <= 10; o++) {
  console.log(`${o} ${o ** 2} ${o ** 3}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let p = 0; p <= 100; p++) {
  if (p % 2 === 0) {
    console.log(p);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let p = 0; p <= 100; p++) {
  if (p % 2 !== 0) {
    console.log(p);
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let q = 2; q <= 100; q++) {
  let isPrime = true;
  for (let r = 2; r <= Math.sqrt(q); r++) {
    if (q % r === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(q);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050
let sum = 0;
for (let s = 0; s <= 100; s++) {
  sum += s;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. The sum of all odds from 0 to 100 is 2500.
let evenSum = 0;
let oddSum = 0;

for (let t = 0; t <= 100; t++) {
  if (t % 2 === 0) {
    evenSum += t;
  } else {
    oddSum += t;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. The sum of all odds from 0 to 100 is ${oddSum}.`
);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
let evenSumArray = 0;
let oddSumArray = 0;

for (let u = 0; u <= 100; u++) {
  if (u % 2 === 0) {
    evenSumArray += u;
  } else {
    oddSumArray += u;
  }
}

console.log([evenSumArray, oddSumArray]);

// 13. Develop a small script which generate array of 5 random numbers
let randomNumber = [];

for (let i = 0; i < 5; i++) {
  randomNumber.push(Math.floor(Math.random() * 10));
}

console.log(randomNumber);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueRandomNumber = [];

while (uniqueRandomNumber.length < 5) {
  let randomNum = Math.floor(Math.random() * 10);
  if (!uniqueRandomNumber.includes(randomNum)) {
    uniqueRandomNumber.push(randomNum);
  }
}

console.log(uniqueRandomNumber);

// 15. Develop a small script which generate a six characters random id:
// 5j2khz
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  id += characters.charAt(Math.floor(Math.random() * characters.length));
}

console.log(id);

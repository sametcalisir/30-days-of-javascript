// Exercise Level 2

// 1. Using console.log() print out the following statement:
let text =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(text);

// 2. Using console.log() print out the following quote by Mother Teresa:
let love =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(love);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = typeof "10";
num = typeof parseInt("10");
console.log(num);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let value9_8 = parseFloat("9.8");
value9_8 = Math.ceil(value9_8);
console.log(value9_8);

// 5. Check if 'on' is found in both python and jargon
let onInPython = "Python".includes("on");
let onInJargon = "jargon".includes("on");
console.log(
  "'on' is present in both Python and Jargon: ",
  onInPython == onInJargon
);

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes("jargon"));

// 7. Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

// 8. Generate a random number between 50 and 100 inclusively.
let randIn50to100 = Math.floor(Math.random() * 51) + 50;
console.log(randIn50to100);

// 9. Generate a random number between 0 and 255 inclusively.
let randIn0to255 = Math.floor(Math.random() * 255);
console.log(randIn0to255);

// 10. Access the 'JavaScript' string characters using a random number.
let js = "JavaScript";
let randomIndex = Math.floor(Math.random() * js.length - 1);
console.log(js[randomIndex]);

// 11. Use console.log() and escape characters to print the following pattern.
console.log(
  "1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125"
);

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
let becauseAll = sentence.substr(
  sentence.indexOf("because"),
  "because".length * 3 + 2
);
console.log(becauseAll);

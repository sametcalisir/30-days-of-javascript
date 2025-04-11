// Exercise Level 1

// 1. Create a closure which has one inner function
function outerFunction() {
  let number = 0;
  function innerFunction() {
    number++;
    return number;
  }
  return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());

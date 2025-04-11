// Exercise Level 2

// 1. Create a closure which has three inner functions
function operations() {
  let number = 0;

  function sum() {
    return (number += 2);
  }

  function multiple() {
    return (number *= 2);
  }

  function sub() {
    return (number -= 2);
  }

  return {
    sum,
    multiple,
    sub,
  };
}

let number = 0;
let func = operations();

console.log(func.sum());
console.log(func.multiple());
console.log(func.sub());

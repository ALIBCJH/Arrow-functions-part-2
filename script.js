function sum(a, b) {
  return a + b;
}
let sum2 = (a, b) >= a + b;

function isPositive(number) {
  return number >= 0;
}
//Arrow Function
let isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

let randomNumber = () => Math.random;

// Arrow functions are really important when creating anonymous functions
document.addEventListener("click", () => console.log("click"));

let age = 18;
let name = age > 18 ? "adult" : "minor";
console.log(`${name}`);

// Creating Arrow Functions
const Age = 24;
const Name = Age > 18 ? "Adult" : "Minor";
console.log(`${Name}`);
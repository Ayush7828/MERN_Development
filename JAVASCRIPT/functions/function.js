// Functions
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function

// Function Declaration
// function nameOfFunction() {}

function add() {
  let a = 2,
    b = 3;

  console.log(a + b);
}
add();
function sum(a, b) {
  return a + b;
}

console.log(sum(78, 45));

function greeeting() {
  console.log("Namaste");
}
greeeting();

function multiple(a, b) {
  console.log(a * b);
}
multiple(4, 5);
// Arrow Function
//  const nameOfFunction = () => {}

let myaddition = (a, b) => {
  console.log("Namasete from Arrow Function");
  return a + b;
};
console.log(myaddition(78, 12));

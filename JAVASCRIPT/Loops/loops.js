// Loops
// 1) For Loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2) While Loop
let a = 1;

while (a < 10) {
  console.log(a);
  a++;
}
console.log("While Loop");

// 3) Do While Loop
// at least one time it will run
let b = 0;
do {
  console.log(b);
  b++;
} while (b < 10);


// for each
// The forEach() method executes a provided function once for each array element.
// syantax -- > array1.forEach(()=>{

// });
const array1 = ["tushar", "ayush", "kumar", "singh"];
array1.forEach((i) => {
  console.log(i);
});
// Arrays
// Arrays are used to store multiple values in a single variable.
// Arrays are objects.

// Creating an Array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ayush"];
console.log(a);
console.log(a.length);
console.log(typeof a);

const array1 = new Array("tushar","ayush", "kumar", "singh");
console.log(array1);
console.log(array1.length);
// array access
console.log(array1[0]);

// Array Methods

// 1) Push
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
array1.push("tushar");
console.log(array1);
console.log(array1.length);

// 2) Pop
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
array1.pop();
console.log(array1);
console.log(array1.length);


// for in
for (let i in array1) {
  console.log("Hello",array1[i]);
}
// sort
array1.sort();
console.log("Sorted Array "+array1);
// include
const ispresent=array1.includes('tushar');
console.log(ispresent);

// indexOf
// indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const ispresentindex=array1.includes('shubham');
console.log(ispresentindex);


// splice
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const words =['Ram ','Shyam','Mohan','Shubham','Ayush','Tushar'];
words.splice(1,3);
console.log(words);


// Skipping elements
const numbers = [10,20,30,40,50];
const [first, , third] = numbers;
console.log(first, third);

// Value Swapping
let a = 5, b = 10;
[a,b] = [b,a];
console.log(a,b);

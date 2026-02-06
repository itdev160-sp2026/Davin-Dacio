

console.log("=== Activity 2: Operators and Control Flow ===");

//Part A
console.log("\nArthmetic Operators");
let a = 15;
let b = 4;

console.log(`a = ${a}, b = ${b}`);
console.log(`Addition (a + b): ${a + b}`);
console.log(`Subtraction (a - b): ${a - b}`);
console.log(`Multiplication (a * b): ${a * b}`);
console.log(`Division (a / b): ${a / b}`);
console.log(`Modulus (a % b): ${a % b}`);

console.log(`\n2 + 3 * 4 = ${2 + 3 * 4} This uses PEMDAS`);
console.log(`(2 + 3) * 4 = ${(2 + 3) * 4} This also uses PEMDAS`);

//Part B
console.log("\nComparison Operators");
let x = 5;
let y = "5";
let z = 10;

console.log(`x = ${x} (number), y = "${y}" (string), z = ${z}`);
console.log(`x == y: ${x == y} loose equalty`);
console.log(`x === y: ${x === y} strict equalty`);
console.log(`x != y: ${x!=y} loose inequality`);
console.log(`x !== y: ${x !== y} strict inequality`);
console.log(`x > y: ${x > z}`);
console.log(`x < z: ${x<z}`);
console.log(`x >= 5: ${x >= 5}`);
console.log(`x <= 5: ${x <= 5}`);

//Part C
console.log("\nLogical Operators");
let isAdult = true;
let hasLicense = false;
let age = 20;

console.log(`isAdult = ${isAdult}, hasLicense = ${hasLicense}, age = ${age}`);
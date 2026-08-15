// ==========================================
// JavaScript Loops
// loops.js
// ==========================================

// ==========================================
// 1. for LOOP
// ==========================================

// Used when you know how many times
// you want to repeat something.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// ==========================================
// 2. HOW for LOOP WORKS
// ==========================================

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// Three parts:
//
// let i = 1   → initialization
// i <= 3      → condition
// i++         → update

// Flow:
//
// Initialize
//    ↓
// Check condition
//    ↓
// Execute code
//    ↓
// Update
//    ↓
// Check condition again

// ==========================================
// 3. COUNTING 1 TO 100
// ==========================================

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// ==========================================
// 4. COUNTING BACKWARD
// ==========================================

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ==========================================
// 5. EVEN NUMBERS
// ==========================================

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// ==========================================
// 6. ODD NUMBERS
// ==========================================

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// ==========================================
// 7. for LOOP WITH CONDITION
// ==========================================

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ==========================================
// 8. NESTED for LOOP
// ==========================================

// A loop inside another loop.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

// ==========================================
// 9. while LOOP
// ==========================================

// Used when repetition depends mainly
// on a condition.

let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}

// IMPORTANT:
// Don't forget to update the variable.
//
// Otherwise you can create an infinite loop.

// ==========================================
// 10. while LOOP BACKWARD
// ==========================================

let j = 5;

while (j >= 1) {
  console.log(j);

  j--;
}

// ==========================================
// 11. do...while LOOP
// ==========================================

// do...while always executes the code
// at least once.

let k = 1;

do {
  console.log(k);

  k++;
} while (k <= 5);

// ==========================================
// 12. do...while IMPORTANT DIFFERENCE
// ==========================================

let number = 10;

do {
  console.log(number);

  number++;
} while (number < 5);

// Output:
// 10

// Even though 10 < 5 is false,
// the code executed once.

// ==========================================
// 13. break
// ==========================================

// break completely stops the loop.

for (let i = 1; i <= 100; i++) {
  if (i === 50) {
    break;
  }

  console.log(i);
}

// Prints:
// 1 to 49

// ==========================================
// 14. continue
// ==========================================

// continue skips the current iteration
// and moves to the next iteration.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// ==========================================
// 15. SKIP MULTIPLES OF 3
// ==========================================

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    continue;
  }

  console.log(i);
}

// ==========================================
// 16. MULTIPLICATION TABLE
// ==========================================

let tableNumber = 7;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}

// ==========================================
// 17. SUM OF NUMBERS
// ==========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);

// ==========================================
// 18. FIRST 10 MULTIPLES
// ==========================================

let multiple = 5;

for (let i = 1; i <= 10; i++) {
  console.log(multiple * i);
}

// ==========================================
// 19. for...of LOOP
// ==========================================

// Used to get values from iterable data
// such as arrays and strings.

const fruits = ["Apple", "Mango", "Banana"];

for (const fruit of fruits) {
  console.log(fruit);
}

// Output:
// Apple
// Mango
// Banana

// ==========================================
// 20. for...of WITH STRING
// ==========================================

const name = "Bhushan";

for (const character of name) {
  console.log(character);
}

// ==========================================
// 21. for...in LOOP
// ==========================================

// Commonly used to iterate over
// object property keys.

const user = {
  name: "Bhushan",
  age: 20,
  city: "Mumbai",
};

for (const key in user) {
  console.log(key);
}

// Output:
// name
// age
// city

// ==========================================
// 22. for...in GET KEY + VALUE
// ==========================================

for (const key in user) {
  console.log(key, user[key]);
}

// ==========================================
// 23. IMPORTANT DIFFERENCE
// ==========================================

/*

for
    ↓
When you know the number of repetitions.


while
    ↓
When repetition depends on a condition.


do...while
    ↓
When the code must execute at least once.


for...of
    ↓
Get VALUES from iterable data.


for...in
    ↓
Get KEYS from an object.


break
    ↓
Stop the entire loop.


continue
    ↓
Skip current iteration.

*/

// ==========================================
// QUICK REVISION
// ==========================================

/*

for:

for (initialization; condition; update) {
    // code
}


while:

while (condition) {
    // code
}


do...while:

do {
    // code
} while (condition);


break:

break;


continue:

continue;


for...of:

for (const value of array) {
    // code
}


for...in:

for (const key in object) {
    // code
}

*/

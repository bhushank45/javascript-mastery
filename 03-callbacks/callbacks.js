// ==========================================
// JavaScript Callbacks
// 03-callbacks/callbacks.js
// ==========================================

// ==========================================
// 1. FUNCTION AS A VALUE
// ==========================================

function greet() {
  console.log("Hello JavaScript");
}

const myFunction = greet;

myFunction();

// A function can be stored in a variable.
//
// greet   → refers to the function
// greet() → executes the function

// ==========================================
// 2. FUNCTION AS AN ARGUMENT
// ==========================================

function sayHello() {
  console.log("Hello Bhushan");
}

function executeFunction(fn) {
  fn();
}

executeFunction(sayHello);

// sayHello is passed to executeFunction.
// It is not executed immediately.
//
// executeFunction(sayHello)
//              ↑
//          function passed

// ==========================================
// 3. WHAT IS A CALLBACK?
// ==========================================

// A callback is a function passed to another
// function so that the other function can
// execute it later.

function greetUser() {
  console.log("Hello User");
}

function processUser(callback) {
  console.log("Processing...");

  callback();
}

processUser(greetUser);

// greetUser → callback

// ==========================================
// 4. CALLBACK WITH ANONYMOUS FUNCTION
// ==========================================

function execute(callback) {
  callback();
}

execute(function () {
  console.log("Hello from callback");
});

// ==========================================
// 5. CALLBACK WITH ARROW FUNCTION
// ==========================================

execute(() => {
  console.log("Hello from arrow callback");
});

// ==========================================
// 6. CALLBACK WITH PARAMETERS
// ==========================================

function calculate(a, b, callback) {
  let result = a + b;

  callback(result);
}

function displayResult(value) {
  console.log("Result:", value);
}

calculate(10, 20, displayResult);

// ==========================================
// 7. CALLBACK USING ARROW FUNCTION
// ==========================================

calculate(10, 20, (result) => {
  console.log("Result:", result);
});

// ==========================================
// 8. setTimeout() CALLBACK
// ==========================================

// The function is executed later.

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// The arrow function is a callback.

// ==========================================
// 9. setInterval() CALLBACK
// ==========================================

// Runs repeatedly after the specified interval.

let count = 1;

const intervalId = setInterval(() => {
  console.log(count);

  count++;

  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);

// ==========================================
// 10. SYNCHRONOUS CALLBACK
// ==========================================

function first(callback) {
  console.log("First");

  callback();
}

first(() => {
  console.log("Second");
});

// Output:
//
// First
// Second

// ==========================================
// 11. CALLBACK EXECUTION FLOW
// ==========================================

function stepOne(callback) {
  console.log("Step 1");

  callback();
}

stepOne(() => {
  console.log("Step 2");
});

// Flow:
//
// stepOne()
//     ↓
// console.log("Step 1")
//     ↓
// callback()
//     ↓
// console.log("Step 2")

// ==========================================
// 12. ARRAY CALLBACK INTRODUCTION
// ==========================================

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
  console.log(number);
});

// The function passed to forEach()
// is a callback.

// ==========================================
// 13. forEach() WITH ARROW FUNCTION
// ==========================================

numbers.forEach((number) => {
  console.log(number * 2);
});

// ==========================================
// 14. CALLBACK WITH MULTIPLE ARGUMENTS
// ==========================================

function operation(a, b, callback) {
  const result = callback(a, b);

  console.log(result);
}

function add(a, b) {
  return a + b;
}

operation(10, 20, add);

// ==========================================
// 15. DIFFERENT CALLBACK
// ==========================================

function multiply(a, b) {
  return a * b;
}

operation(10, 20, multiply);

// Same function can accept different
// callback functions.

// ==========================================
// 16. CALLBACK WITH ANONYMOUS FUNCTION
// ==========================================

operation(10, 20, function (a, b) {
  return a - b;
});

// ==========================================
// 17. CALLBACK WITH ARROW FUNCTION
// ==========================================

operation(10, 20, (a, b) => {
  return a / b;
});

// ==========================================
// 18. IMPORTANT: FUNCTION vs FUNCTION CALL
// ==========================================

function greetAgain() {
  console.log("Hello");
}

// Passing the function
execute(greetAgain);

// Calling the function immediately
greetAgain();

// IMPORTANT:
//
// greetAgain
//     ↓
// Function itself
//
// greetAgain()
//     ↓
// Execute the function

// ==========================================
// QUICK REVISION
// ==========================================

/*

CALLBACK:

A function passed to another function
to be executed by it.


Example:

function execute(callback) {
    callback();
}

function greet() {
    console.log("Hello");
}

execute(greet);


IMPORTANT:

execute(greet)
       ↑
Pass function


execute(greet())
       ↑
Usually WRONG for a callback.

greet()
    ↓
Executes immediately
    ↓
Its return value gets passed instead.


CALLBACKS APPEAR IN:

setTimeout()
setInterval()
addEventListener()
forEach()
map()
filter()
find()
etc.


MAIN IDEA:

Function
    ↓
Can be stored in a variable
    ↓
Can be passed as an argument
    ↓
Can be returned from another function
    ↓
This enables CALLBACKS

*/

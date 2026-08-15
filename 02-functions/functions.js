// ==========================================
// JavaScript Functions
// 02-functions/functions.js
// ==========================================

// ==========================================
// 1. FUNCTION DECLARATION
// ==========================================

// A function is a reusable block of code.

function greet() {
  console.log("Hello JavaScript");
}

// Calling the function
greet();

// ==========================================
// 2. FUNCTION WITH PARAMETERS
// ==========================================

function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("Bhushan");

// ==========================================
// 3. PARAMETERS vs ARGUMENTS
// ==========================================

// name → parameter
function welcome(name) {
  console.log(`Welcome ${name}`);
}

// "Bhushan" → argument
welcome("Bhushan");

// ==========================================
// 4. MULTIPLE PARAMETERS
// ==========================================

function add(a, b) {
  console.log(a + b);
}

add(10, 20);

// ==========================================
// 5. RETURN
// ==========================================

// return sends a value back to the caller.

function sum(a, b) {
  return a + b;
}

let result = sum(10, 20);

console.log(result);

// ==========================================
// 6. return vs console.log()
// ==========================================

// console.log() → displays the result

function addition(a, b) {
  console.log(a + b);
}

addition(10, 20);

// return → sends the result back

function addition2(a, b) {
  return a + b;
}

let total = addition2(10, 20);

console.log(total);

// ==========================================
// 7. FUNCTION WITH CONDITIONS
// ==========================================

function checkAge(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}

console.log(checkAge(20));

// ==========================================
// 8. FUNCTION WITH LOOPS
// ==========================================

function printNumbers() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

printNumbers();

// ==========================================
// 9. FUNCTION EXPRESSION
// ==========================================

// A function can be stored inside a variable.

const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 4));

// ==========================================
// 10. ANONYMOUS FUNCTION
// ==========================================

// A function without its own name.

const greet2 = function () {
  console.log("Hello");
};

greet2();

// ==========================================
// 11. NAMED FUNCTION EXPRESSION
// ==========================================

const greet3 = function hello() {
  console.log("Hello JavaScript");
};

greet3();

// hello() cannot normally be called
// from outside the function expression.

// ==========================================
// 12. ARROW FUNCTION
// ==========================================

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(20, 10));

// ==========================================
// 13. ARROW FUNCTION - SHORT SYNTAX
// ==========================================

// When there is only one expression,
// return can be written implicitly.

const square = (num) => num * num;

console.log(square(5));

// ==========================================
// 14. ONE PARAMETER
// ==========================================

// Parentheses can be omitted for one parameter.

const cube = (num) => num * num * num;

console.log(cube(3));

// ==========================================
// 15. NO PARAMETERS
// ==========================================

const sayHello = () => {
  console.log("Hello");
};

sayHello();

// ==========================================
// 16. DEFAULT PARAMETERS
// ==========================================

function greetDefault(name = "Guest") {
  console.log(`Hello ${name}`);
}

greetDefault("Bhushan");
greetDefault();

// ==========================================
// 17. FUNCTION RETURNING BOOLEAN
// ==========================================

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7)); // false

// ==========================================
// 18. FUNCTION RETURNING DIFFERENT VALUES
// ==========================================

function numberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(numberType(10));
console.log(numberType(-5));
console.log(numberType(0));

// ==========================================
// 19. FUNCTION AS A VALUE
// ==========================================

// Functions can be stored in variables.

const myFunction = function () {
  console.log("Function stored in a variable");
};

myFunction();

// ==========================================
// 20. FUNCTION PASSED AS AN ARGUMENT
// ==========================================

// A function can be passed to another function.

function greetPerson() {
  console.log("Hello Bhushan");
}

function executeFunction(fn) {
  fn();
}

executeFunction(greetPerson);

// The function passed to another function
// is called a CALLBACK.
//
// We will study callbacks separately.

// ==========================================
// 21. FUNCTION SCOPE
// ==========================================

function testScope() {
  let message = "Inside function";

  console.log(message);
}

testScope();

// message cannot be accessed here.
// console.log(message); // ❌ Error

// ==========================================
// 22. LOCAL vs GLOBAL VARIABLE
// ==========================================

let globalName = "Bhushan";

function showName() {
  let localName = "JavaScript";

  console.log(globalName);
  console.log(localName);
}

showName();

// globalName → accessible inside function
// localName  → accessible only inside function

// ==========================================
// 23. FUNCTION WITH MULTIPLE OPERATIONS
// ==========================================

function calculator(a, b) {
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
  console.log("Division:", a / b);
}

calculator(30, 10);

// ==========================================
// 24. REUSABLE FUNCTION
// ==========================================

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

multiplicationTable(5);

// ==========================================
// QUICK REVISION
// ==========================================

/*

FUNCTION:

A reusable block of code.


FUNCTION DECLARATION:

function greet() {
    // code
}


CALLING:

greet();


PARAMETER:

function greet(name) {}

name → parameter


ARGUMENT:

greet("Bhushan");

"Bhushan" → argument


RETURN:

return value;


FUNCTION EXPRESSION:

const greet = function () {};


ANONYMOUS FUNCTION:

function () {}


NAMED FUNCTION EXPRESSION:

const greet = function hello() {};


ARROW FUNCTION:

const greet = () => {};


SHORT ARROW:

const square = num => num * num;


DEFAULT PARAMETER:

function greet(name = "Guest") {}


IMPORTANT:

console.log()
    ↓
Displays something.


return
    ↓
Sends a value back to the caller.


FUNCTION AS ARGUMENT:

executeFunction(greet);


This leads to:

CALLBACKS ⭐

*/

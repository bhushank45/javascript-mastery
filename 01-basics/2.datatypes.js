// ==========================================
// JavaScript Data Types - datatypes.js
// ==========================================

// ==========================================
// 1. PRIMITIVE DATA TYPES
// ==========================================

// JavaScript has 7 primitive data types:
//
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// ==========================================
// 2. STRING
// ==========================================

let name = "Bhushan";

console.log(name);
console.log(typeof name);

// Strings can use:
// Single quotes
let city = 'Mumbai';

// Double quotes
let course = "Computer Science";

// Backticks
let message = `Hello JavaScript`;

console.log(city);
console.log(course);
console.log(message);

// ==========================================
// 3. NUMBER
// ==========================================

let age = 20;
let price = 499.99;

console.log(age);
console.log(price);

console.log(typeof age);
console.log(typeof price);

// JavaScript has one Number type
// for both integers and decimal numbers.

// ==========================================
// 4. BOOLEAN
// ==========================================

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

console.log(typeof isStudent);

// Boolean is generally used for
// true / false conditions.

// ==========================================
// 5. UNDEFINED
// ==========================================

let username;

console.log(username);
console.log(typeof username);

// A variable is undefined when it has been
// declared but no value has been assigned.

// ==========================================
// 6. NULL
// ==========================================

let selectedUser = null;

console.log(selectedUser);
console.log(typeof selectedUser);

// null means:
// "There is intentionally no value."

// IMPORTANT:
// typeof null returns "object"
// This is a historical JavaScript behavior.

// ==========================================
// 7. BIGINT
// ==========================================

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

// BigInt is used for very large integers.

// The "n" at the end makes it a BigInt.

// ==========================================
// 8. SYMBOL
// ==========================================

let id = Symbol("id");

console.log(id);
console.log(typeof id);

// Symbol creates a unique value.

// Two Symbols with the same description
// are still different.

let symbol1 = Symbol("user");
let symbol2 = Symbol("user");

console.log(symbol1 === symbol2); // false

// ==========================================
// 9. OBJECT
// ==========================================

// Objects are NON-PRIMITIVE data types.

const user = {
  name: "Bhushan",
  age: 20,
};

console.log(user);
console.log(typeof user);

// ==========================================
// 10. ARRAY
// ==========================================

const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(typeof fruits);

// IMPORTANT:
// Arrays are technically objects in JavaScript.

console.log(Array.isArray(fruits)); // true

// ==========================================
// 11. FUNCTION
// ==========================================

function greet() {
  console.log("Hello");
}

console.log(typeof greet);

// Functions are technically objects,
// but JavaScript gives them the typeof result
// "function".

// ==========================================
// 12. PRIMITIVE vs NON-PRIMITIVE
// ==========================================

/*

PRIMITIVE:

String
Number
Boolean
Undefined
Null
BigInt
Symbol


NON-PRIMITIVE:

Object
Array
Function
etc.

*/

// ==========================================
// 13. typeof OPERATOR
// ==========================================

console.log(typeof "Hello"); // string
console.log(typeof 100); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof 123n); // bigint
console.log(typeof Symbol("id")); // symbol
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

// ==========================================
// QUICK REVISION
// ==========================================

/*

7 PRIMITIVE DATA TYPES:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol


NON-PRIMITIVE:

Object
Array
Function
etc.


IMPORTANT:

typeof null === "object"

typeof [] === "object"

typeof function() {} === "function"

*/

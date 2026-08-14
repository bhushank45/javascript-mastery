// ==========================================
// JavaScript Conditions
// conditions.js
// ==========================================

// ==========================================
// 1. if STATEMENT
// ==========================================

// if runs the code only when the condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

// ==========================================
// 2. if WITH FALSE CONDITION
// ==========================================

let marks = 20;

if (marks >= 35) {
  console.log("Pass");
}

// Nothing is printed because the condition is false.

// ==========================================
// 3. if...else
// ==========================================

// if → runs when condition is true
// else → runs when condition is false

let score = 70;

if (score >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ==========================================
// 4. if...else if...else
// ==========================================

// Used when there are multiple conditions.

let percentage = 82;

if (percentage >= 90) {
  console.log("Grade A+");
} else if (percentage >= 75) {
  console.log("Grade A");
} else if (percentage >= 60) {
  console.log("Grade B");
} else if (percentage >= 35) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ==========================================
// 5. ORDER OF CONDITIONS ⭐
// ==========================================

// Conditions are checked from top to bottom.

let marks2 = 85;

if (marks2 >= 90) {
  console.log("A+");
} else if (marks2 >= 75) {
  console.log("A");
} else if (marks2 >= 60) {
  console.log("B");
} else {
  console.log("Fail");
}

// Once a condition is true,
// JavaScript stops checking the remaining
// else-if conditions.

// ==========================================
// 6. NESTED if
// ==========================================

// An if statement inside another if statement.

let userAge = 20;
let hasID = true;

if (userAge >= 18) {
  if (hasID) {
    console.log("You can enter");
  } else {
    console.log("ID required");
  }
} else {
  console.log("You are underage");
}

// ==========================================
// 7. MULTIPLE CONDITIONS
// ==========================================

// && → AND
// Both conditions must be true.

let age2 = 20;
let hasLicense = true;

if (age2 >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

// ==========================================
// 8. OR CONDITION
// ==========================================

// || → OR
// At least one condition must be true.

let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// ==========================================
// 9. NOT CONDITION
// ==========================================

// ! reverses true and false.

let loggedIn = false;

if (!loggedIn) {
  console.log("Please login");
}

// ==========================================
// 10. COMPARISON IN CONDITIONS
// ==========================================

let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater");
}

if (a < b) {
  console.log("b is greater");
}

if (a === b) {
  console.log("Both are equal");
}

// ==========================================
// 11. EVEN / ODD
// ==========================================

let number = 10;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// ==========================================
// 12. POSITIVE / NEGATIVE / ZERO
// ==========================================

let number2 = -5;

if (number2 > 0) {
  console.log("Positive");
} else if (number2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// ==========================================
// 13. VOTING ELIGIBILITY
// ==========================================

let voterAge = 20;

if (voterAge >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// ==========================================
// 14. LOGIN CHECK
// ==========================================

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}

// ==========================================
// 15. switch STATEMENT
// ==========================================

// switch is useful when comparing
// one value against multiple exact values.

let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Invalid day");
}

// ==========================================
// 16. WHY break IN switch?
// ==========================================

// break stops the switch after a matching case.

let fruit = "Apple";

switch (fruit) {
  case "Apple":
    console.log("Red or green fruit");
    break;

  case "Banana":
    console.log("Yellow fruit");
    break;

  default:
    console.log("Unknown fruit");
}

// ==========================================
// 17. default IN switch
// ==========================================

// default runs when no case matches.

let option = 10;

switch (option) {
  case 1:
    console.log("Option 1");
    break;

  case 2:
    console.log("Option 2");
    break;

  default:
    console.log("Invalid option");
}

// ==========================================
// 18. TERNARY OPERATOR
// ==========================================

// Short way of writing a simple if...else.

let age3 = 20;

let result = age3 >= 18 ? "Adult" : "Minor";

console.log(result);

// Syntax:
//
// condition ? valueIfTrue : valueIfFalse

// ==========================================
// 19. TERNARY WITH console.log()
// ==========================================

let temperature = 35;

console.log(temperature > 30 ? "Hot" : "Normal");

// ==========================================
// 20. TRUTHY AND FALSY IN CONDITIONS
// ==========================================

let name = "";

if (name) {
  console.log("Name exists");
} else {
  console.log("Name is empty");
}

// Empty string is falsy.

// ==========================================
// 21. Common FALSY VALUES
// ==========================================

/*

false
0
-0
""
null
undefined
NaN

*/

// ==========================================
// 22. TRUTHY VALUES
// ==========================================

if ("Hello") {
  console.log("This is truthy");
}

if (100) {
  console.log("This is truthy");
}

if ([]) {
  console.log("Empty array is truthy");
}

if ({}) {
  console.log("Empty object is truthy");
}

// ==========================================
// 23. NULLISH COALESCING IN CONDITIONS
// ==========================================

// ?? checks specifically for null or undefined.

let userName = null;

let displayName = userName ?? "Guest";

console.log(displayName);

// ==========================================
// QUICK REVISION
// ==========================================

/*

if
    ↓
Runs when condition is true.


if...else
    ↓
Choose between two possibilities.


if...else if...else
    ↓
Choose between multiple conditions.


Nested if
    ↓
An if statement inside another if.


&&
    ↓
AND → all conditions must be true.


||
    ↓
OR → at least one condition must be true.


!
    ↓
NOT → reverses true/false.


switch
    ↓
Useful for comparing one value
against multiple exact values.


ternary
    ↓
Short if...else.

condition ? trueValue : falseValue


IMPORTANT:

Conditions use boolean results:

true
false


MODERN JAVASCRIPT:

Prefer === instead of ==

Prefer !== instead of !=

*/

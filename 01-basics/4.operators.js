// ==========================================
// JavaScript Operators
// operators.js
// ==========================================

// ==========================================
// 1. ARITHMETIC OPERATORS
// ==========================================

let a = 10;
let b = 3;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder
console.log(a ** b); // Exponent

// ==========================================
// 2. ASSIGNMENT OPERATORS
// ==========================================

let score = 10;

score += 5;

console.log(score); // 15

score -= 3;

console.log(score); // 12

score *= 2;

console.log(score); // 24

score /= 4;

console.log(score); // 6

score %= 4;

console.log(score); // 2

// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================

let x = 10;
let y = 20;

console.log(x > y); // false
console.log(x < y); // true

console.log(x >= y); // false
console.log(x <= y); // true

// ==========================================
// 4. EQUALITY OPERATORS
// ==========================================

// Loose equality
console.log(10 == "10"); // true

// Strict equality
console.log(10 === "10"); // false

// Modern JavaScript:
// Prefer ===

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// Prefer !==

// ==========================================
// 5. LOGICAL AND
// ==========================================

// &&

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false

// Both conditions must be true.

// Example

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
// true

// ==========================================
// 6. LOGICAL OR
// ==========================================

// ||

console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// At least one condition must be true.

// Example

let isAdmin = false;
let isOwner = true;

console.log(isAdmin || isOwner);
// true

// ==========================================
// 7. LOGICAL NOT
// ==========================================

// !

console.log(!true); // false
console.log(!false); // true

let loggedIn = true;

console.log(!loggedIn);
// false

// ==========================================
// 8. INCREMENT OPERATOR
// ==========================================

let count = 5;

count++;

console.log(count); // 6

// ==========================================
// 9. DECREMENT OPERATOR
// ==========================================

count--;

console.log(count); // 5

// ==========================================
// 10. TERNARY OPERATOR
// ==========================================

let userAge = 20;

let status = userAge >= 18 ? "Adult" : "Minor";

console.log(status);

// Syntax:
//
// condition ? valueIfTrue : valueIfFalse

// ==========================================
// 11. NULLISH COALESCING OPERATOR
// ==========================================

// ??

let username = null;

let displayName = username ?? "Guest";

console.log(displayName);

// If the left side is null or undefined,
// the right side is used.

// ==========================================
// 12. OPTIONAL CHAINING OPERATOR
// ==========================================

// ?.

const user = {
  name: "Bhushan",
};

console.log(user.name);

console.log(user.address?.city);

// Returns undefined instead of throwing
// an error when address doesn't exist.

// ==========================================
// 13. OPERATOR PRECEDENCE
// ==========================================

let result = 10 + 5 * 2;

console.log(result);

// 20

// Multiplication happens before addition.

// Use parentheses when you want
// to make the order clear.

let result2 = (10 + 5) * 2;

console.log(result2);

// 30

// ==========================================
// QUICK REVISION
// ==========================================

/*

ARITHMETIC:

+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder
**  Exponent


ASSIGNMENT:

=   Assign
+=  Add and assign
-=  Subtract and assign
*=  Multiply and assign
/=  Divide and assign
%=  Remainder and assign


COMPARISON:

>   Greater than
<   Less than
>=  Greater than or equal
<=  Less than or equal

==  Loose equality
=== Strict equality ⭐

!=  Loose inequality
!== Strict inequality ⭐


LOGICAL:

&&  AND
||  OR
!   NOT


OTHER:

++  Increment
--  Decrement
?:  Ternary
??  Nullish coalescing
?.  Optional chaining


MODERN JAVASCRIPT:

Prefer === instead of ==
Prefer !== instead of !=

*/

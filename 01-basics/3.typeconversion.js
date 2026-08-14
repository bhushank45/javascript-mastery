// ==========================================
// JavaScript Type Conversion
// typeconversion.js
// ==========================================

// ==========================================
// 1. STRING CONVERSION
// ==========================================

let number = 100;

let stringNumber = String(number);

console.log(stringNumber);
console.log(typeof stringNumber);

// Number → String

let booleanValue = true;

let stringBoolean = String(booleanValue);

console.log(stringBoolean);
console.log(typeof stringBoolean);

// Boolean → String

// ==========================================
// 2. NUMBER CONVERSION
// ==========================================

let value1 = "100";

let convertedNumber = Number(value1);

console.log(convertedNumber);
console.log(typeof convertedNumber);

// String → Number

let decimalValue = "25.50";

console.log(Number(decimalValue));

// String → Number

// ==========================================
// 3. BOOLEAN TO NUMBER
// ==========================================

console.log(Number(true)); // 1
console.log(Number(false)); // 0

// ==========================================
// 4. INVALID NUMBER CONVERSION
// ==========================================

let invalidNumber = Number("Hello");

console.log(invalidNumber); // NaN
console.log(typeof invalidNumber); // number

// NaN = Not a Number

// ==========================================
// 5. BOOLEAN CONVERSION
// ==========================================

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false

// ==========================================
// 6. FALSY VALUES
// ==========================================

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// ==========================================
// 7. TRUTHY VALUES
// ==========================================

console.log(Boolean("Hello")); // true
console.log(Boolean(100)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// ==========================================
// 8. parseInt()
// ==========================================

console.log(parseInt("100")); // 100
console.log(parseInt("100px")); // 100
console.log(parseInt("25.50")); // 25
console.log(parseInt("px100")); // NaN

// parseInt() returns an integer

// ==========================================
// 9. parseFloat()
// ==========================================

console.log(parseFloat("25.50")); // 25.5
console.log(parseFloat("100.99")); // 100.99
console.log(parseFloat("100px")); // 100

// parseFloat() keeps decimal values

// ==========================================
// 10. Number() vs parseInt()
// ==========================================

console.log(Number("100px")); // NaN
console.log(parseInt("100px")); // 100

// Number() expects the complete value
// to be a valid number.

// parseInt() reads the integer from the beginning.

// ==========================================
// 11. UNARY PLUS
// ==========================================

let textNumber = "50";

let result = +textNumber;

console.log(result);
console.log(typeof result);

// "50" → 50

// ==========================================
// 12. IMPLICIT CONVERSION
// ==========================================

console.log("10" + 5);

// "105"

console.log("10" - 5);

// 5

console.log("10" * 5);

// 50

console.log("10" / 5);

// 2

// JavaScript automatically converts
// the string into a number for -, *, /

// ==========================================
// 13. NaN CHECK
// ==========================================

let result2 = Number("Hello");

console.log(Number.isNaN(result2)); // true

// ==========================================
// QUICK REVISION
// ==========================================

/*

String(value)
Number(value)
Boolean(value)
parseInt(value)
parseFloat(value)


Number("100")       → 100
Number("100px")     → NaN

parseInt("100px")   → 100
parseFloat("10.50") → 10.5

Boolean(0)          → false
Boolean("")         → false
Boolean("Hello")    → true

Falsy values:

false
0
-0
""
null
undefined
NaN

*/

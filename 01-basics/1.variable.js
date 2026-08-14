// ==========================================
// JavaScript Variables - variable.js
// ==========================================

// ==========================================
// 1. LET
// ==========================================

let age = 20;

console.log(age);

// let can be reassigned
age = 21;

console.log(age);

// let cannot be redeclared in the same scope
// let age = 22; // ❌ Error

// ==========================================
// 2. CONST
// ==========================================

const name = "Bhushan";

console.log(name);

// const cannot be reassigned
// name = "Rahul"; // ❌ Error

// const cannot be redeclared
// const name = "Rahul"; // ❌ Error

// ==========================================
// 3. VAR
// ==========================================

var city = "Mumbai";

console.log(city);

// var can be reassigned
city = "Pune";

console.log(city);

// var can be redeclared
var city = "Nashik";

console.log(city);

// ==========================================
// 4. BLOCK SCOPE
// ==========================================

if (true) {
  let marks = 90;
  const grade = "A";
  var result = "Pass";

  console.log(marks);
  console.log(grade);
  console.log(result);
}

// let and const are block-scoped
// console.log(marks); // ❌ Error
// console.log(grade); // ❌ Error

// var is NOT block-scoped
console.log(result); // ✅ Pass

// ==========================================
// 5. FUNCTION SCOPE
// ==========================================

function testScope() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x);
  console.log(y);
  console.log(z);
}

testScope();

// None of these variables are accessible outside
// console.log(x); // ❌
// console.log(y); // ❌
// console.log(z); // ❌

// ==========================================
// 6. MODERN JAVASCRIPT RULE
// ==========================================

// Prefer const when the variable won't be reassigned

const college = "Mumbai University";

// Use let when the value needs to change

let score = 0;

score = 10;
score = 20;

console.log(score);

// Avoid var in new modern JavaScript code

// var oldStyle = "Legacy JavaScript";

// ==========================================
// 7. IMPORTANT: CONST WITH OBJECT
// ==========================================

const user = {
  name: "Bhushan",
  age: 20,
};

// You cannot reassign the variable itself
// user = {}; // ❌ Error

// But you CAN modify the object's property
user.age = 21;

console.log(user);

// ==========================================
// 8. IMPORTANT: CONST WITH ARRAY
// ==========================================

const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);

// You cannot reassign the array itself
// fruits = ["Orange"]; // ❌ Error

// ==========================================
// QUICK REVISION
// ==========================================

/*

let
    ✅ Reassign
    ❌ Redeclare
    ✅ Block scoped

const
    ❌ Reassign
    ❌ Redeclare
    ✅ Block scoped

var
    ✅ Reassign
    ✅ Redeclare
    ❌ Block scoped
    ✅ Function scoped


MODERN DEVELOPER RULE:

    const → default choice
    let   → when reassignment is needed
    var   → generally avoid in new code

*/

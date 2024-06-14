/*                   Question 24: 
More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.*/

// Equality with strings
console.log("Testing equality with strings:");
let favplace="bali";
console.log(favplace=="bali")  //true
console.log(favplace=="paris")  //false
// Tests using the lower case function
console.log(" Tests using the lower case function")
console.log("Apple".toLowerCase()=='apple')
console.log("Apple".toLowerCase()=='Apple')
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log(26>=24)
console.log(22<=26)
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True

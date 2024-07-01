/*               Question 71:
 Compare let and const: Create two examples where let allows reassignment but 
 const does not. Try to reassign a const-declared variable and catch the error.*/


// Using `let` for a variable that can be reassigned
let age = 25;
console.log("Initial age:", age); // Output: 25

// Reassigning the variable declared with `let`
age = 26; // Works fine because `let` allows reassignment
console.log("Reassigned age:", age); // Output 26

// Using `const` for a variable that cannot be reassigned
const name = "Rubi";
console.log("Initial name:", name); // Output: Rubi

// Trying to reassign a `const`-declared variable
try {
    name = "nimra"; // This line will cause an error
} catch (error) {
    console.error("Error: Can't reassign a `const`-declared variable."); // This message is shown
    console.error(error.message); // Output the actual error message
}
// This example illustrates that `const` prevents changing the variable once it's set. 

/*          Question 90:
Checking if a Value is NaN: Demonstrate how to check if a variable's
 value is NaN (Not a Number) and return a boolean result.*/
// This function checks if a value is Not a Number (NaN)
function isValueNaN(value) {
    return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("hello"));
console.log(isValueNaN(123));
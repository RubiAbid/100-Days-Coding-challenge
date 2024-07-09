/*           Question 88:
 Rounding to the Nearest Integer: Write a function that takes a decimal
  number as input and returns the number rounded to the nearest integer.*/
function decimalnum(num) {
    // Use Math.round() to round the input number to the nearest integer
    return Math.round(num);
}
// Test the decimalnum function with 4.7, expect 5
console.log(decimalnum(4.7));
// Test the decimalnum function with 8.2, expect 8
console.log(decimalnum(8.2));

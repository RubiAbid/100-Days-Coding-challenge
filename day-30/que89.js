/*             Question 89:
 Converting Strings to Numbers: Create a function that takes a string
 representing a number (like "123") and converts it into an actual number type.
*/
// Function to convert a string to a number
function convert(str) {
    // Use parseFloat to convert the string to a floating-point number
    return parseFloat(str);
}
// Call the function and log the result to the console
console.log(convert("123"));

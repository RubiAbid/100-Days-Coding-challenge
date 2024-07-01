/*          Question 67:
Arithmetic with Mixed Types: Write a function that takes two parameters: a number
 and a string that represents a number (e.g., "5"). Return their sum as a number. */
function mixedTypes(num, str) {
    return num + Number(str);
}
var sum = mixedTypes(5, "5");
console.log(sum);

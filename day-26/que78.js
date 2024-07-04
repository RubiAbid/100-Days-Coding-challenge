/*             Question 78:
 Function Expressions vs. Function Declarations: Compare function expressions and
 declarations by creating one of each that performs the same task, such as squaring a number.*/
function square(num1, num2) {
    return Math.pow(num1, num2);
}
console.log(square(4, 2));
var squaring = function (num1, num2) {
    return Math.pow(num1, num2);
};
console.log(squaring(2, 3));

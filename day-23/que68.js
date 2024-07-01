/*             Question 68:
 Multiplying Decimals: Create a function that accepts two decimal numbers
  and returns their product. Round the result to two decimal places.*/
function decimalNum(num1, num2) {
    return Number((num1 * num2).toFixed(2));
}
console.log(decimalNum(4.22, 9.228));

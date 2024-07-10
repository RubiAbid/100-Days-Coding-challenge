/*                   Question 96:
 Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
*/ 

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); 

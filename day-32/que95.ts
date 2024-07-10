/*              Question 95:
 Write a function that uses the .filter() method to return an array of numbers greater than 10.*/


function returnsarray(array: number[]) {
    // Filter the array to include only numbers greater than 10
    return array.filter(num => num > 10);
}

const array1 = returnsarray([1, 5, 7, 11, 99, 56, 87, 23]);
// Call the function with an array of numbers and store the result in array1

console.log(array1);
// Print the filtered array to the console

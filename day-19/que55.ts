/*                  Question 55: 
Double Numbers in an Array: Make a list of numbers. Then, use a trick
 to make a new list where each number is twice its original value.*/


// Initialize an array of numbers
let num: number[] = [2, 4, 6, 8];

// Use the map() method to create a new array where each element is doubled
let doublenumber: number[] = num.map(num => num * 2);

// Output the new array to the console
console.log(doublenumber); 

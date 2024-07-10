/*          Question 94:
 Use the .map() method to create a new array that contains the length of each word from an array of words.*/
// Initialize an array of strings with some words
var array = ["hi", "my", "name", "is", "Rubi"];
// Use the map method to create a new array containing the lengths of each word in the original array
var Lengthofwords = array.map(function (word) { return word.length; });
// Log the array of word lengths to the console
console.log(Lengthofwords);

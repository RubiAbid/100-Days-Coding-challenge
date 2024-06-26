/*           Question 56:
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/
// Initialize an array with mixed types of items
var mixitems = ['cat', 'love', 65, 'bird', true, 'six', 9];
// Use the filter method to create a new array containing only the string items
var onlystrings = mixitems.filter(function (mixitems) { return typeof mixitems == "string"; });
// Output the new array to the console
console.log(onlystrings); // ["cat", "love", "bird", "six"]

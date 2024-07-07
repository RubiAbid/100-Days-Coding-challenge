/*                 Question 85:
 Finding the Position of a Substring: Write a function that locates the first
  occurrence of the word "code" within any given string and returns its position.*/
// Function to find the first occurrence of the word "code" in a given string
function findCodePosition(str) {
    // Use the indexOf method to find the position of the substring "code"
    var position = str.indexOf("code");
    // Return the position of the first occurrence of "code"
    return position;
}
// Example usage
var text = "Learning to code is fun. Practice makes you better at code.";
var position = findCodePosition(text);
console.log(position);

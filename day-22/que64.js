/*            Question 64:
Combine Strings and Numbers: Write a function that merges a piece of text with a number.
 For example, if provided with "Age: " and 30, it should give back "Age: 30".*/
function combine(text, age) {
    return text + age; // Concatenate name and age into a string
}
var combineBoth = combine("age:", 22);
console.log(combineBoth); // Output: Rubi22

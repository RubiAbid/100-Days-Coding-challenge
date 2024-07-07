/*             Question 84:
 Replacing Text in a String: Write a function that takes a sentence
 and replaces all instances of the word "JavaScript" with "TypeScript".*/
// Function to replace all occurrences of "javascript" with "typescript" in a given string
function replacement(str) {
    // Use the replace method with a regular expression to perform the replacement
    // - "g" is a flag indicating a global search (i.e., find all matches in the string
    return str.replace(/javascript/g, "typescript");
}
// Log the result of calling the replacement function with a test string
console.log(replacement("I love javascript and javascript is easy"));

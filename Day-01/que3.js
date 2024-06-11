//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Name = "rUbi aBid";
console.log("Lower Case:", Name.toLowerCase()); // Convert the string to lower case and print the result
console.log("Upper Case:", Name.toUpperCase()); // Convert the string to upper case and print the result
var titleCaseName = Name.split(' ') // Split the string into words
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a single string
console.log("Title Case:", titleCaseName);

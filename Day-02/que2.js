/*           Question 2:
 Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your
  message and store it in a new variable called message. Print your message.*/
// Define a variable to store the name of the famous person
var famousPerson = "Eleanor Roosevelt";
// Define a variable to store a quote by the famous person
var message = '"No one can make you feel inferior without your consent"';
// Print a message using template literals, incorporating the famous person's name and the quote
console.log("".concat(famousPerson, " once said, ").concat(message));

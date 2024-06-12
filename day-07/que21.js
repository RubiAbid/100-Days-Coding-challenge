/*           Question 21:
Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
// Defining the object for person data
var persondata = {
    name: "Rubi", // String value for the 'name' property
    age: 22, // Number value for the 'age' property
    qualification: "Masters" // String value for the 'qualification' property
};
// Logging the persondata object information to the console
// Using template literals to create a formatted string with the person's information
console.log("Person Info: ".concat(persondata.name, ", Age: ").concat(persondata.age, ", Qualification: ").concat(persondata.qualification));

/*Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing
 multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function hobbies() {
    var diffHobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        diffHobbies[_i] = arguments[_i];
    }
    // Iterate over each hobby in the diffHobbies array
    diffHobbies.forEach(function (hobby) {
        // Log a message indicating that you enjoy the hobby
        console.log("I enjoy ".concat(hobby, "."));
    });
}
// Call the hobbies function with multiple hobbies as arguments
hobbies("reading", "cycling", "coding", "planting", "cooking");

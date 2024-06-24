/*Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing
 multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/


function hobbies(...diffHobbies: string[]){
    // Iterate over each hobby in the diffHobbies array
    diffHobbies.forEach(hobby => {
        // Log a message indicating that you enjoy the hobby
        console.log(`I enjoy ${hobby}.`);
    });
}

// Call the hobbies function with multiple hobbies as arguments
hobbies("reading", "cycling", "coding", "planting", "cooking");

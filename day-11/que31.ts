/*         Question 31: 
No Users: Ensure your user list isn’t empty.*/



// Define an array of usernames
let usernames: string[] = [];

// Check if the array is empty
if (usernames.length === 0) {
    // If the array is empty, log a message indicating the need for users
    console.log("We need to find some users!");
} else {
    // If the array is not empty, iterate over each username
    for (let username of usernames) {
        // Check if the current username is "admin"
        if (username === "admin") {
            // If the username is "admin", log a special greeting
            console.log("Hello admin, would you like to see a status report?");
        } else {
            // If the username is not "admin", log a generic greeting
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

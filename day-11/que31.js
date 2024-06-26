/*         Question 31:
No Users: Ensure your user list isn’t empty.*/
// Define an array of usernames
var usernames = [];
// Check if the array is empty
if (usernames.length === 0) {
    // If the array is empty, log a message indicating the need for users
    console.log("We need to find some users!");
}
else {
    // If the array is not empty, iterate over each username
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        // Check if the current username is "admin"
        if (username === "admin") {
            // If the username is "admin", log a special greeting
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            // If the username is not "admin", log a generic greeting
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}

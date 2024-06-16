/*         Question 32:
Checking Usernames: Ensure uniqueness in usernames.*/
// Array of current users
var current_users = ['simran', 'khadija', 'amna', 'amber', 'saba'];
// Array of new users to check
var new_users = ['faiza', 'aliya', 'saba', 'amna', 'asiya'];
// Loop through each new user
new_users.forEach(function (new_User) {
    // Check if the new user already exists in the current users array (case insensitive)
    var newCondition = current_users.some(function (currentuser) { return currentuser.toLowerCase() === new_User.toLowerCase(); });
    // If the new user exists, print a message saying they already exist
    if (newCondition) {
        console.log("This ".concat(new_User, " already exists."));
    }
    // If the new user does not exist, print a message saying they are available
    else {
        console.log("This ".concat(new_User, " is available."));
    }
});

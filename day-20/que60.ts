/*          Question 60:
 Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.*/


 let userProfile = (function() {
    // The user's details are kept inside
    let name = "Rubi";
    let age = 22;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age

/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
// Function to modify magician names by adding "the Great"
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i] + " the Great";
    }
}
// Function to display names of magicians from an array
function show_Magicians(names) {
    names.forEach(function (name) {
        console.log(name);
    });
}
// Array of magician names
var magician_Names = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Dynamo (Steven Frayne)", "Derren Brown"];
// Call make_great function to modify the magician_names array
make_great(magician_Names);
// Call show_magicians function to display the modified magician names
show_Magicians(magician_Names);

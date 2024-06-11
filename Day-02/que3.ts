/*               Question 3:
 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab)
  and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after
   stripping the white spaces. */


// Define a variable to store the person's name with whitespace characters
let personName: string = "  \t  rubi  \n   ";

// Print the name with whitespace
console.log("Name with whitespace:", personName);

// Print the name after removing leading and trailing whitespace
console.log("Name after stripping whitespace:", personName.trim());


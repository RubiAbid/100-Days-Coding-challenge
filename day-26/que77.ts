/*                Question 77:
 Default Parameters: Write a function that greets a user. It should take the user's name
  as a parameter and say hello. If no name is given, it should greet an anonymous user.*/

  function greet(name: string = "anonymous user") {
    console.log(`Hello, ${name}!`);
}

// Examples:
greet("Rubi"); // Output: Hello, Rubi!
greet(); // Output: Hello, anonymous user!

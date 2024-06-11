/*               Question 12:** 
 Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them.
  The message should be the same for each person, but personalized with their name. */


  let friends: string[] = ['waniya', 'ramsha', 'suniya', 'aliya'];

  // Iterate through each friend in the friends array
  for (let i = 0; i < friends.length; i++) {
      // Create a message for each friend using string interpolation
      let message: string = `Hey ${friends[i]}, I hope this message finds you well and happy. Let's plan something fun soon!`;
  
      // Print the message to the console
      console.log(message);
  }
  
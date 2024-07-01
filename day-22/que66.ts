/*              Question 66:
 Logical AND Verification: Create a function that checks two boolean (true or false) values. 
 It should only say true if both are true, using the && operator. For instance, 
 checkBothTrue(true, false) should be false.*/

  

 function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2;
}

// Example usage:
console.log(checkBothTrue(true, false)); // Output: false
console.log(checkBothTrue(true, true));  // Output: true
console.log(checkBothTrue(false, true)); // Output: false

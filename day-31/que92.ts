/*          Question 92:
 Write a function to remove the last element from an array and return the removed element.*/




 function removelemnt(array: string[]): string | undefined {
    // Remove the last element from the array
    let popElement = array.pop();
    // Return the removed element
    return popElement;
}

// Define the array of fruits
let fruitts = ["apple", "mango", "orange"];

// Call the function to remove the last element and log the result
console.log(removelemnt(fruitts)); // Output: "orange"

// Log the updated array to the console
console.log(fruitts); // Output: ["apple", "mango"]

/*                Question 93: 
Find the index of "Banana" in an array of fruits and replace it with "Mango".*/



function checkIndex(arr: string[]): void {
    // Find the index of "banana" in the array
    const index = arr.indexOf("banana");
    // If "banana" is found, replace it with "Mango"
    if (index !== -1) {
        arr[index] = "Mango";
    }
}

// Define the array of fruits
let fruits = ["orange", "lichi", "cherry", "banana"];

// Call the function to check the index of "banana" and replace it with "Mango"
checkIndex(fruits);

// Log the updated array to the console
console.log(fruits); 


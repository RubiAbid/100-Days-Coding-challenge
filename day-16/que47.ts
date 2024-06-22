/*                 Question 47:
Advanced Array Destructuring: Given an array of objects representing different laptops, 
each with properties make, model, and year, use array destructuring to assign the first
 and second laptops to variables. Then, log these variables.*/

 let laptops = [
    {
        make: "HP",
        model: "Pavilion",
        year: 2021,
    },
    {
        make: "Dell",
        model: "Inspiron 15",
        year: 2023,
    },
    {
        make: "Apple",
        model: "MacBook Air",
        year: 2022,
    },
    
];

// Destructure the first and second objects from the laptops array
let [firstLaptop, secondLaptop] = laptops;

// Log the variables
console.log(firstLaptop);
console.log(secondLaptop);

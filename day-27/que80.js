/*              Question 80:
 Updating Object Properties: Add a property named color to the existing car object,
  and then update the year property to 2021. Show how to perform these operations.*/
// Define a car object with make, model, and year properties
var carproperties = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
// Update the year property of the car object
carproperties.year = 2021;
// Add a new property color to the car object
carproperties.color = "blue";
// Log the updated year property to the console
console.log(carproperties);

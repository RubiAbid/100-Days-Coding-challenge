/*           Question 59:
 Add a Special Number: Make a program that creates custom adders. These adders can 
 add a specific number to any other number you give them later.*/

 // This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number) => number {
    // This is the magic box. It takes a number and adds your special number to it
    return function(number: number): number {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log("Magic box of 3")
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
console.log(addFive(20)); // If we put 20 in the box, it gives us 25
// Making another magic box that adds 3
let addThree = makeAdder(3);
console.log("Magic box of 3")
console.log(addThree(10)); // If we put 10 in the box, it gives us 13
console.log(addThree(20)); // If we put 20 in the box, it gives us 23


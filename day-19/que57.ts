/*    Question 57: 
Find the Average Grade: Given a list of grades, calculate the average grade.*/


let grades: number[] = [95, 82, 80, 89, 82];

// Calculate the sum of the grades
let total: number = grades.reduce((sum, grade) => sum + grade, 0);

// Calculate the average grade
let average: number = total / grades.length;

// Output the average grade to the console
console.log(`The average grade is ${average}`);

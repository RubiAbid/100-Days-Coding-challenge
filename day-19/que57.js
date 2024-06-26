/*    Question 57:
Find the Average Grade: Given a list of grades, calculate the average grade.*/
var grades = [95, 82, 80, 89, 82];
// Calculate the sum of the grades
var total = grades.reduce(function (sum, grade) { return sum + grade; }, 0);
// Calculate the average grade
var average = total / grades.length;
// Output the average grade to the console
console.log("The average grade is ".concat(average));

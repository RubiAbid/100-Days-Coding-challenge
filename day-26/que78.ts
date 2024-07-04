/*             Question 78:
 Function Expressions vs. Function Declarations: Compare function expressions and 
 declarations by creating one of each that performs the same task, such as squaring a number.*/


function square(num1:number,num2:number) {
    return num1**num2
}  
console.log(square(4,2))

const squaring = function(num1: number, num2: number) {
    return num1 ** num2;
};
console.log(squaring(2, 3));

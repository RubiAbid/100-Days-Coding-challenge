/*   Question 58:
 Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/
function avgnumber() {
    var addscores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        addscores[_i] = arguments[_i];
    }
    // Calculate the total sum of all the scores using the reduce method
    var total = addscores.reduce(function (sum, score) { return sum + score; }, 0);
    // Calculate the average by dividing the total by the number of scores
    var avg = total / addscores.length;
    return avg;
}
// Example usage
var nmbr = avgnumber(20, 19, 18, 16);
console.log(nmbr); // Output the average score

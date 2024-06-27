/*   Question 58:
 Average Score Calculator: Write a simple program that can take lots of scores and find their average.*/

 function avgnumber(...addscores: number[]): number {
    // Calculate the total sum of all the scores using the reduce method
    let total = addscores.reduce((sum, score) => sum + score, 0);

    // Calculate the average by dividing the total by the number of scores
    let avg = total / addscores.length;

    return avg;
}

// Example usage
let nmbr = avgnumber(20, 19, 18, 16);
console.log(nmbr);  // Output the average score

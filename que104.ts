/*   Question 104:
 Create a function that generates a random hexadecimal color code.*/


 // Function to generate a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    let paddedColor = color;
    // Pad with zeros if necessary
    while (paddedColor.length < 7) {
        paddedColor += '0';
    }
    return paddedColor; // Return the generated color code
}

// Usage example
console.log(getRandomHexColor());



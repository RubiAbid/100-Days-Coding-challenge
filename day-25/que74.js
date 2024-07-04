/*               Question 74:
Swapping Variables: Demonstrate how to swap the values of two variables. Start with
variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.*/
function swapValues() {
    var a = 5; // Initial value of a
    var b = 10; // Initial value of b
    console.log("Before swapping: a = ".concat(a, " and b = ").concat(b));
    // Swapping values using a temporary variable
    var temp = a; // Store the value of a in temp
    a = b; // Assign the value of b to a
    b = temp; // Assign the value of temp (original a) to b
    console.log("After swapping: a = ".concat(a, " and b = ").concat(b));
}
swapValues();

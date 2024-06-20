/*              Question 34:
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.*/
var pizza = ['peproni', 'fajita', 'BBQ'];
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var pizzaname = pizza_1[_i];
    console.log("I like ".concat(pizzaname, " pizza"));
}
console.log("I really love pizza!");

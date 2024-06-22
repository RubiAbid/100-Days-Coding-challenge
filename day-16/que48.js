/*                     Question 48:
 Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.Use the
  spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var price1 = [45000, 60000, 75000];
var price2 = [40000, 55000, 70000];
// Spread operator to combine arrays
var combine = __spreadArray(__spreadArray([], price1, true), price2, true);
// Sorting with a comparison function
combine.sort(function (a, b) { return a - b; });
console.log(combine);

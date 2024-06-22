/*                     Question 48:
 Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.Use the
  spread operator to combine these arrays into a single array sorted in ascending order, then log the result.*/

  
  let price1: number[] = [45000, 60000, 75000];
  let price2: number[] = [40000, 55000, 70000];
  
  // Spread operator to combine arrays
  let combine: number[] = [...price1, ...price2];
  
  // Sorting with a comparison function
  combine.sort((a, b) => a - b);
  
  console.log(combine);
  
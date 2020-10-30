const birthdayCakeCandles = (candles) => {
  let highest = Math.max(...candles);
  let container = candles.filter((item) => {return item === highest});
   return container.length;
}

const result1 = birthdayCakeCandles([3, 2, 1, 3]); // 2
const result2 = birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]); // 2
const result3 = birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]); // 5
const result4 = birthdayCakeCandles([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]); // 21
const result5 = birthdayCakeCandles([5, 4, 8, 12, 9, 2]); // 1
const result6 = birthdayCakeCandles([7, 3, 5, 7, 6, 7]); // 3




console.log({ result1, result2, result3, result4, result5, result6 });

// Hint:
// You can use the Math.max() method to get the max height from the array --- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// You'll need to use an array method to filter and get the candles that matches the maximum height....




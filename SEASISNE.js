// Instructions
// Part I
// Using this array: const myWatchedSeries - ['black mirror"!
// money heist", "the big bang theory"];
// 1. Create a variable named myWatchedSeriesLength that is equal to the number of series in the mywatchedSeries array.
// 2. Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example: black mirror, money heist, and the big bang theory
// 3. Console.log a sentence using both of the variables created above
// For example: I watched 3 series : black mirror, money.
// keist;
// and the big bang theory

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

myWatchedSeries.splice(
  2,
  1,
  `and ${myWatchedSeries[myWatchedSeriesLength - 1]}`
);
const myWatchedSeriesSetence = myWatchedSeries.join(" , ");
console.log(myWatchedSeriesSetence);

console.log(
  `i watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSetence}`
);

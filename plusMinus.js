const plusMinus = (arr) => {
  // For 6 places after decimal use the toFixed method.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#:~:text=Description,it%20has%20the%20specified%20length.

   let positive = 0;
   let negative = 0;
   let zero = 0;
   let n = arr.length;

    for(i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negative++
      } else if (arr[i] > 0) {
        positive++
      } else {
        zero++
      }
        

    }


  // Write Your Code Above this line🙄
  console.log((positive/n).toFixed(6) );
  console.log((negative/n).toFixed(6) );
  console.log((zero/n).toFixed(6) );
}

plusMinus([0, 0, -1, 1, 1]);
// 0.400000
// 0.200000
// 0.400000

plusMinus([-4, 3, -9, 0, 4, 1]);
// 0.500000
// 0.333333
// 0.166667

plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
// 0.375000
// 0.375000
// 0.250000

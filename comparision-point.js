const compareTriplets = (a, b) => {
    let points = [0, 0];

    for(i = 0; i < 3; i++) {
         if(a[i] > b[i])
             points[0]++;

         else if (a[i] < b[i])
             points[1]++;
     }

  return points;         
}
   
const result = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log({result});
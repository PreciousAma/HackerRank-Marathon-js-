const diagonalDifference = (arr) => {
    let d1 = 0;
    let d2 = 0;
    
    for(let i = 0; i < arr.length; i++) {
        d1 = d1 + arr[i][i];
        d2 = d2 + arr[i][arr.length - (i + 1)];
    }
    return Math.abs(d1 - d2);
}

const result1 = diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]); // 2
const result2 = diagonalDifference([[-10, 3, 0, 5, -4], [2, -1, 0, 2, -8], [9, -2, -5, 6, 0], [9, -7, 4, 8, -2], [3, 7, 8, -5, 0]]); // 3
const result3 = diagonalDifference([[6, 8], [-6, 9]]); // 13
const result4 = diagonalDifference([
    [6, 6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0]]); // 52
console.log({result1, result2, result3, result4});

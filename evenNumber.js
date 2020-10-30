const evenNumber = (arr) => {
    return arr.filter((item, index) => {return (item % 2 === 0) && (index % 2 === 0) });
}
let result = evenNumber([1, 3, 2, 6, 4, 8]);
console.log(result);

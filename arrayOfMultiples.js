const arrayOfMultiples = (num, length) => {
    let multipleArray = [num];
    let currentMultiple = num;
    for (let i = 1; i < length; i++ ) {
        currentMultiple += num;
        multipleArray.push(currentMultiple);
    }
    return multipleArray;
}
console.log(arrayOfMultiples(7, 5));
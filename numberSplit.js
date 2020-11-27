const numberSplit = (num) => {
    let halve = Math.round(num / 2);
    let secondHalve = num - halve;
    
    if(halve < secondHalve) {
        return [halve, secondHalve];
    }
    return [secondHalve, halve];
}
let result = numberSplit(11);
console.log(result);


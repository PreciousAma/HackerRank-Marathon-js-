const arr = [1,2,3,4,5,6];
const reducer = (a, b) => a + b;

const simpleArraySum = (data) => {
    const result = data.reduce(reducer);
    return result;
}
const result = simpleArraySum(arr);
console.log({result});